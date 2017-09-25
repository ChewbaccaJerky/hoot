import React from 'react';
import Header from './header/header';
import NavBarContainer from './navbar/navbar_container';
import NewBusinessIndexContainer from './business/new_business/new_business_index_container';
import ShowBusinessContainer from     './business/show_business/business_show_container';
import SessionFormContainer from './session_form/session_form_container';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={NavBarContainer} />
      <Route path="/businesses/:biz_id" component={NavBarContainer} />
      <Route path="/signup" component={Header} />
      <Route path="/login" component ={Header} />
    </Switch>

    <div className="main-page">
      <Switch>
        <Route exact path="/" component={NewBusinessIndexContainer}/>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route path="/businesses/:biz_id" component={ShowBusinessContainer} />
      </Switch>
    </div>

    <Route path='/' component={Footer} />
  </div>
);

export default App;
