import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PATHS } from '../constants';
import { AppSkeleton } from '../components';
import {
  AccountSettings,
  Assignment,
  AssignmentEditor,
  Attendance,
  Discussion,
  DiscussionEditor,
  CohortManager,
  Dashboard,
  EventEditor,
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
        <Route exact path={PATHS.EVENT_EDITOR} component={EventEditor} />
        <Route
          exact
          path={PATHS.DISCUSSION_EDITOR}
          component={DiscussionEditor}
        />
        <Route
          exact
          path={PATHS.ASSIGNMENT_EDITOR}
          component={AssignmentEditor}
        />
        

        <Route exact path={PATHS.COHORT_MANAGER} component={CohortManager} />
        <Route exact path={PATHS.ATTENDANCE} component={Attendance} />
        <Route exact path={PATHS.STATISTICS} component={Statistics} />
        <Route exact path={PATHS.ASSIGNMENTS} component={Assignment}/>
        <Route exact path={PATHS.DISCUSSIONS} component={Discussion}/>
      </Switch>
    </AppSkeleton>
  );
}

export default SecureRoutes;
