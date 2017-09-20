import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router';
const App = () => (
  <div>
    <h1> Nav </h1>
    <div className="main-page">
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </div>
    <h1> Footer </h1>
  </div>
);

export default App;
