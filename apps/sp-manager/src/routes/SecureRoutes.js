import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHS } from '../constants';
import { AppSkeleton } from '../components';
import {
  AccountSettings,
  Attendance,
  CohortManager,
  Dashboard,
  EventManager,
  Profile,
  Statistics,
} from '../pages';

function SecureRoutes() {
  return (
    <AppSkeleton>
      <Switch>
        <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
        <Route exact path={PATHS.PROFILE} component={Profile} />
        <Route
          exact
          path={PATHS.ACCOUNT_SETTINGS}
          component={AccountSettings}
        />
        <Route exact path={PATHS.EVENT_MANAGER} component={EventManager} />
        <Route exact path={PATHS.COHORT_MANAGER} component={CohortManager} />
        <Route exact path={PATHS.ATTENDANCE} component={Attendance} />
        <Route exact path={PATHS.STATISTICS} component={Statistics} />
      </Switch>
    </AppSkeleton>
  );
}

export default SecureRoutes;
