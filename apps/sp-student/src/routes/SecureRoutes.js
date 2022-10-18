import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHS } from '../constants';
import { AppSkeleton } from '../components';
import {
  AccountSettings,
  Assignment,
  Dashboard,
  Discussion,
  Profile,
  Statistics,
} from '../pages';

function SecureRoutes() {
  return (
    <AppSkeleton>
      <Switch>
        <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
        <Route exact path={PATHS.PROFILE} component={Profile} />
        <Route exact path={PATHS.ASSIGNMENT} component={Assignment} />
        <Route exact path={PATHS.STATISTICS} component={Statistics} />
        <Route
          exact
          path={PATHS.DISCUSSIONS}
          component={Discussion}
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
