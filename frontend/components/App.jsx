import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <NavBarContainer />
    <div className="main-page">
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>

    <Footer />
  </div>
);

export default App;
