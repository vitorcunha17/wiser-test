import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import rootReducer, { history } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware]


const store = createStore(rootReducer, 
    compose(
        applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(rootSaga);

export { store, history };