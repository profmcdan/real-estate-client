import React, { Fragment, useState } from 'react';
import { Store } from '../../configureStore';
import { IAction } from '../../interfaces';
import { REGISTER } from '../../actions/actionTypes';

export default function Register() {
  const { state, dispatch } = React.useContext(Store);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const register = (): IAction => {
    const userDetails = {
      username: name,
      email: email,
      role: 'admin',
      loggedIn: true,
    };
    return dispatch({
      type: REGISTER,
      payload: userDetails,
    });
  };

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
      case 'name': {
        setName(value);
        break;
      }
      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    register();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
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
}
