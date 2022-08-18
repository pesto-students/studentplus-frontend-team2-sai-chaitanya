import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';

import { PATHS } from '../constants';
import SecureRoutes from './SecureRoutes';
import { ForgotPassword, Login } from '../pages';
import { OIDC } from './constants';

const oktaAuth = new OktaAuth(OIDC);

function Routes() {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push(`/${PATHS.LOGIN}`);
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };
  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Switch>
        <Route exact path={PATHS.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route exact path={PATHS.LOGIN} component={Login} />
        <Route exact path={PATHS.LOGIN_CALLBACK} component={LoginCallback} />
        <SecureRoute path="*" component={SecureRoutes} />
      </Switch>
    </Security>
  );
}

export default Routes;
