import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../configureStore';
import { IAction, ILoginProps, IAuth } from '../../interfaces';
import { LOGIN } from '../../actions/actionTypes';

const Login = () => {
  const { state, dispatch } = useContext(Store);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event: any): void => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    login(email, password);
  };

  const login = (email: string, password: string): IAction => {
    // call login
    const userDetails: IAuth = {
      username: 'profmcdan',
      email: email,
      role: 'admin',
      loggedIn: true,
    };
    return dispatch({
      type: LOGIN,
      payload: userDetails,
    });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            id="password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </Fragment>
  );
};

export default Login;
