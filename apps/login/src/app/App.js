import { Route, Switch, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from '../config/config';
import { Login, Profile } from '../pages';
import './app.module.scss'

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
      <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler} restoreOriginalUri={restoreOriginalUri}>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/login/callback" component={LoginCallback}/>
            <SecureRoute path="/profile" component={Profile}/>
          </Switch>
      </Security>
  );
};
export default App;