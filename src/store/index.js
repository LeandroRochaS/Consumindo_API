import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import persistedReducers from "./modules/reduxPersist";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
