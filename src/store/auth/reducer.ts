import { Types } from './actions'

const initialState = {
  id: '',
  name: '',
  role: '',
  email: '',
  avatar: '',
  user: '',
  authorized: '',
  loading: false,
}

export default function userReducer(state = initialState, action: { type: string, payload: any }) {
  switch (action.type) {
    case Types.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
