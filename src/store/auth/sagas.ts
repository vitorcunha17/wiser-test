import { all, takeEvery, put, call, takeLatest } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'store'
// import { login, forgotPassword, recoveryPassword, myProfile } from 'services/auth'
import { AuthService } from '../../services/api'
import { Types, Creators } from './actions'

export function* LOGIN({ payload }: any) {
  const { email, password } = payload
  yield put(Creators.setState({ loading: true }));

  try {
    const response = yield call(AuthService.login, email, password);
    if (response.status === 200) {
      notification.success({ message: 'Login feito com sucesso!' });

      yield localStorage.setItem("token", response.data.data.token);
      yield localStorage.setItem("name", response.data.data.user.legalPerson === null ?
        response.data.data.user.individualPerson.full_name :
        response.data.data.user.legalPerson.responsible_full_name
      )
      yield localStorage.setItem("email", response.data.data.user.email)

      yield put(Creators.setState({
        authorized: true,
        email: response.data.data.user.email,
        role: response.data.data.user.user_type[0]
      }));

      yield history.push('/');

    }
  } catch (e) {
    notification.error({ message: e.message });
  }
  yield put(Creators.setState({ loading: false }))
}
/* se tiver token no storage seta que ta autorizado no state */
export function* LOAD_CURRENT_ACCOUNT() {
  try {

    yield put(Creators.setState({ loading: true }));

    const token = yield localStorage.getItem("token");
    const response = yield call(AuthService.myProfile);

    yield put(Creators.setState({
      authorized: !!token,
      email: response.data.email,
      id: response.data.secure_id,
      loading: false
    }));


  } catch (e) {
    yield localStorage.removeItem("token");
    yield put(Creators.setState({ loading: false }));
  }
}

export function* FORGET_PASSWORD({ payload }: any) {
  yield put(Creators.setState({ loading: true }));
  try {
    const response = yield call(AuthService.forgotPassword, payload.email)
    if (response.status === 200) {
      notification.success({ message: 'Acesse o link enviado em seu email para alteração de senha!' })
    }
  } catch (e) {
    notification.error({ message: e.message })
  }
  yield put(Creators.setState({ loading: false }));
}

export function* RECOVERY_PASSWORD({ payload }: any) {
  const { token, password } = payload
  yield put(Creators.setState({ loading: true }));
  try {
    const response = yield call(AuthService.recoveryPassword, token, password)
    if (response.status === 200) {
      notification.success({ message: 'Senha atualizada com sucesso!' })
    }

  } catch (e) {
    notification.error({ message: e.message })
  }
  yield put(Creators.setState({ loading: false }));
}

export function* LOGOUT() {
  yield put(Creators.setState({
    id: '',
    name: '',
    role: '',
    email: '',
    avatar: '',
    authorized: false,
    loading: false,
  }));

  localStorage.clear();
  history.push('/login');
}

export default function* rootSaga() {
  yield all([
    takeLatest(Types.LOGIN, LOGIN),
    takeLatest(Types.FORGET_PASSWORD, FORGET_PASSWORD),
    takeLatest(Types.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeLatest(Types.RECOVERY_PASSWORD, RECOVERY_PASSWORD),
    takeEvery(Types.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(), //roda uma unica vez ao inicio do app para checar se ta logado
  ])
}
