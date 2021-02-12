import { combineReducers } from 'redux';
import auth from './auth/reducer';

import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
    router: connectRouter(history),
    auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;