import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureStore();
export const persistor = persistStore(store);
