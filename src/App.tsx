import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Store } from './configureStore';
import Header from './components/layout/Header';
import Home from './components/home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer';
import ApartmentList from './components/apartment/ApartmentList';
import ApartmentDetail from './components/apartment/ApartmentDetail';
import AddApartment from './components/apartment/AddApartment';
import Sidebar from './components/layout/Sidebar';
import AgentList from './components/agent/AgentList';
import Land from './components/land';

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);
  return (
    <Router>
      <Fragment>
        <Container>
          <Header />
          <Row className="layout">
            <Col xs="auto">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/apartments" component={ApartmentList} />
                <Route
                  exact
                  path="/apartment/:apartmentId"
                  component={ApartmentDetail}
                />
                <Route exact path="/new-apartment" component={AddApartment} />
                <Route exact path="/agents" component={AgentList} />
                <Route exact path="/lands" component={Land} />
              </Switch>
            </Col>
            <Col xs="3">
              <Sidebar />
            </Col>
          </Row>

          <Footer />
        </Container>
      </Fragment>
    </Router>
  );
};

export default App;
