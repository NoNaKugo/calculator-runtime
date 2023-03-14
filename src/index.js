import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './components/App/App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const defaultState = {
  check: true
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "changeCheck":
      return {...state, check: !state.check}
    default:
      return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
