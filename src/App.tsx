import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Store } from './configureStore';
import Header from './components/layout/Header';
// import Home from './components/home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer';
import ApartmentList from './components/apartment/ApartmentList';
import ApartmentDetail from './components/apartment/ApartmentDetail';
import AddApartment from './components/apartment/AddApartment';
// import Sidebar from './components/layout/Sidebar';
import AgentList from './components/agent/AgentList';
import Land from './components/land';
import Movies from './components/movies/MovieList';
// const Movies = React.lazy(() => import('./components/movies/MovieList'));

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);
  return (
    <Router>
      <Fragment>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={Movies} />
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
          <Footer />
        </Container>
      </Fragment>
    </Router>
  );
};

export default App;
