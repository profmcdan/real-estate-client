import React, { Fragment } from 'react';
import { Store } from '../../configureStore';
import { IAction } from '../../interfaces';
import { REGISTER } from '../../actions/actionTypes';

export default function Register() {
  const { state, dispatch } = React.useContext(Store);

  const register = (): IAction => {
    const userDetails = {
      username: 'somename',
      email: 'daniel@email.com',
      role: 'admin',
      loggedIn: true,
    };
    return dispatch({
      type: REGISTER,
      payload: userDetails,
    });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    register();
  };

  return (
    <Fragment>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Sign Uo</button>
      </form>
    </Fragment>
  );
}
