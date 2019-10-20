import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Login from './components/auth/Login';
import Footer from './components/layout/Footer';
import { Store } from './configureStore';
import ApartmentList from './components/apartment/ApartmentList';
import ApartmentDetail from './components/apartment/ApartmentDetail';
import AddApartment from './components/apartment/AddApartment';
import Sidebar from './components/layout/Sidebar';

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);
  return (
    <Router>
      <Fragment>
        <Header />
        <section>
          <div>
            <Sidebar />
          </div>
          <div>
            <Switch>
              <Route path="/" component={ApartmentList} />
              <Route path="/apartment" component={ApartmentList} />
              <Route
                path="/apartment/:apartmentId"
                component={ApartmentDetail}
              />
              <Route path="/new-apartment" component={AddApartment} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </section>

        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
