import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Expensify</h1>
      <NavLink to='/' activeClassName='is-active'>Dashboard</NavLink>
      <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
    </div>
  );
}

export default Header;
// // linhas removidas porque a rota será trabalhado por baixo dos panos*/
// <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
// <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
