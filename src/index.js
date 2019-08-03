import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configure-store";
import { Provider } from "react-redux";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import { firebase } from "./firebase/firebase";
import "react-dates/lib/css/_datepicker.css";
import "./styles/styles.css";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    const uid = "CQMU4Btb1rQ6bCLQeETgF6A1kLX2";
    store.dispatch(login(uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      console.log("logged in!", user);
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    console.log('OUTCH!!', user);
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
