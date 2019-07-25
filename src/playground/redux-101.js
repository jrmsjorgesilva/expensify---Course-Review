import React from 'react';
import { createStore } from 'redux';

//REDUX 101

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy: 10
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy: 10
});

//RESET
const resetCount = () => ({
  type: 'RESET',
});

//SET
const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      }
    default:
        return state;
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));

unsubscribe(); // ignora as chamadas de print para futuras ações
//REDUX 101
