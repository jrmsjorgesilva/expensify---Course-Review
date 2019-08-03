import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import { startLogout } from "../actions/auth";

// const Header = ({ startLogout }) => {
//   return (
//     <div>
//       <h1>Expensify</h1>
//       <NavLink to="/dashboard" activeClassName="is-active">
//         Dashboard
//       </NavLink>
//       <NavLink to="/create" activeClassName="is-active">
//         Create Expense
//       </NavLink>
//       <button onClick={startLogout}>Logout</button>
//     </div>
//   );
// };

// const mapDispatchToProps = dispatch => ({
//   startLogout: () => dispatch(startLogout())
// });

// export default connect(
//   undefined,
//   mapDispatchToProps
// )(Header);

// // // linhas removidas porque a rota será trabalhado por baixo dos panos*/
// // <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
// // <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
