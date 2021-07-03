import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../saga';
import reducer from '../reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export { store, sagaMiddleware };
