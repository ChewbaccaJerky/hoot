import React from 'react';
import Header from './header/header';
import NavBarContainer from './navbar/navbar_container';
import NewBusinessIndexContainer from './business/new_business/new_business_index_container';
import ShowBusinessContainer from     './business/show_business/business_show_container';
import SessionFormContainer from './session_form/session_form_container';
import BusinessSearchContainer from './business/search_business/business_search_container';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={NavBarContainer} />
      <Route path="/businesses/:biz_id" component={NavBarContainer} />
      <Route path="/search" component={NavBarContainer} />
      <Route path="/signup" component={Header} />
      <Route path="/login" component ={Header} />
    </Switch>

    <div className="main-page">
      <Switch>
        <Route path="/businesses/:biz_id" component={ShowBusinessContainer} />
        <Route path="/search/:search_params" component={BusinessSearchContainer} />
      </Switch>
    </div>
  </div>
);


// <Route exact path="/" component={NewBusinessIndexContainer}/>
// <Route exact path='/' component={Footer} />
export default App;
