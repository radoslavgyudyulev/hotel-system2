import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
