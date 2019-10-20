import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Login from './components/auth/Login';
import Footer from './components/layout/Footer';
import { Store } from './configureStore';

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  return (
    <Router>
      <Fragment>
        <Header />

        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
