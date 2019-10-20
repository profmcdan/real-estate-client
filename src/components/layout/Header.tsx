import React, { Fragment, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Store } from '../../configureStore';
import { IAction } from '../../interfaces';
import { LOGOUT } from '../../actions/actionTypes';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

export default function Header() {
  const { state, dispatch } = React.useContext(Store);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">GY-HOMES</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/apartments">Apartments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/agents">Agents</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/lands">Land</NavLink>
            </NavItem>
            {!state.auth.loggedIn ? (
              <Fragment>
                <NavItem>
                  <NavLink href="/register">Register </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </Fragment>
            ) : (
              <Button color="danger" onClick={() => logout()}>
                Logout
              </Button>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
}
