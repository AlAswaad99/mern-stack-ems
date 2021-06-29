import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducer_index'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas_index';


const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;