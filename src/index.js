import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configure-store";
import { Provider } from "react-redux";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
// import './playground/promises';

const store = configureStore();
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

//torna visiveis as despesas
console.log(visibleExpenses);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById("app")
  );
});
