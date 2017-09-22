import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import Header from './header/header';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>

    <Switch>
      <Route exact path="/" component={NavBarContainer} />
      <Route path="/signup" component={Header} />
      <Route path="/login" component ={Header} />
    </Switch>

    <div className="main-page">
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>

    <Footer />
  </div>
);

export default App;
