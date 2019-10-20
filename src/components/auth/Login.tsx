import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../configureStore';
import { IAction } from '../../interfaces';
import { LOGIN } from '../../actions/actionTypes';

const Login = () => {
  const { state, dispatch } = React.useContext(Store);

  const login = (): IAction => {
    const userDetails = {
      username: 'somename',
      email: 'daniel@email.com',
      role: 'admin',
      loggedIn: true,
    };
    return dispatch({
      type: LOGIN,
      payload: userDetails,
    });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    login();
  };

  return (
    <Fragment>
      <h2>Enter your details to log in</h2>
      <section>
        <p>Loading ...</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a name" />
          <button type="submit">Sign in</button>
        </form>
      </section>
      <Link to="/">Return to home page</Link>
    </Fragment>
  );
};

export default Login;
