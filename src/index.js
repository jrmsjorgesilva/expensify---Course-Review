import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configure-store';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 100}));
store.dispatch(addExpense({ description: 'gas bill', amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({ description: "rent", amount: 104225 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  , document.getElementById('app'));
