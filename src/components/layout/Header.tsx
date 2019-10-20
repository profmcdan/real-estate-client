import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../configureStore';
import { IAction } from '../../interfaces';
import { LOGOUT } from '../../actions/actionTypes';

export default function Header() {
  const { state, dispatch } = React.useContext(Store);

  const logout = (): IAction => {
    const userDetails = {
      username: '',
      email: '',
      role: '',
      loggedIn: false,
    };
    return dispatch({
      type: LOGOUT,
      payload: userDetails,
    });
  };

  return (
    <Fragment>
      <section>
        <nav>
          <Link to="/">QY-Homes</Link>
        </nav>
        <div>
          {!state.auth.loggedIn ? (
            <Link to="/login">Login</Link>
          ) : (
            <button type="button" onClick={() => logout()}>
              Logout
            </button>
          )}
        </div>
      </section>
    </Fragment>
  );
}
