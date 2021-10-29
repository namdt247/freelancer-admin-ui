import React from 'react';
import createSagaMiddleware from 'redux-saga';
import allReducers from "./reducers";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import RouteContent from "./RouteContent";
import rootSaga from "./sagas/rootSaga";
import ToastMessage from "./components/ToastMessage";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <RouteContent/>
          <ToastMessage/>
        </BrowserRouter>
      </Provider>
  );
}

sagaMiddleware.run(rootSaga);

export default App;
