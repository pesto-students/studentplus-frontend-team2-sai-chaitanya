import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHS } from '../constants';
import { AppSkeleton } from '../components';
import {
  AccountSettings,
  Assignment,
  CohortCreator,
  CreateUser,
  Dashboard,
  LiveSessionChat,
  Profile,
  Statistics,
} from '../pages';

function SecureRoutes() {
  return (
    <AppSkeleton>
      <Switch>
        <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
        <Route exact path={PATHS.PROFILE} component={Profile} />
        <Route exact path={PATHS.COHORT_CREATOR} component={CohortCreator} />
        <Route exact path={PATHS.CREATE_USER} component={CreateUser} />
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
