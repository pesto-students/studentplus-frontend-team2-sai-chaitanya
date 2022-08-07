import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from '../config/config';
import { Login, Profile } from '../pages';
import './app.module.css'

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Router>
      <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler} restoreOriginalUri={restoreOriginalUri}>
          <Switch>
            <Route path="/" exact={true} component={Login}/>
            <Route path="/login/callback" component={LoginCallback}/>
            <SecureRoute path="/profile" component={Profile}/>
          </Switch>
      </Security>
    </Router>

  );
};
export default App;
