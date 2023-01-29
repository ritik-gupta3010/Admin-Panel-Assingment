import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './redux/reducers/Reducers';

const middleware = [thunk];
//store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const Root = () => {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));


