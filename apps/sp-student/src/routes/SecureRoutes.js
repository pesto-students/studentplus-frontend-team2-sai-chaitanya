import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHS } from '../constants';
import { AppSkeleton } from '../components';
import {
  AccountSettings,
  Assignment,
  Dashboard,
  LiveSessionChat,
  Profile,
} from '../pages';

function SecureRoutes() {
  return (
    <AppSkeleton>
      <Switch>
        <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
        <Route exact path={PATHS.PROFILE} component={Profile} />
        <Route exact path={PATHS.ASSIGNMENT} component={Assignment} />
        <Route
          exact
          path={PATHS.LIVE_SESSION_CHAT}
          component={LiveSessionChat}
        />
        <Route
          exact
          path={PATHS.ACCOUNT_SETTINGS}
          component={AccountSettings}
        />
      </Switch>
    </AppSkeleton>
  );
}

export default SecureRoutes;
