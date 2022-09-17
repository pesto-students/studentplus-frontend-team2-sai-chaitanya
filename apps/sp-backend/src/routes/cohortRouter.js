const express = require('express');

const CohortCtrl = require('../controllers/cohortController');

const cohortRouter = express.Router();

cohortRouter.post('/cohort', CohortCtrl.createCohort);
cohortRouter.get('/cohorts', CohortCtrl.getCohorts);
cohortRouter.get('/cohorts/active/', CohortCtrl.getActiveCohorts);
cohortRouter.get('/cohort/:id', CohortCtrl.getCohortById);
cohortRouter.get('/student-cohort/:cohortId', CohortCtrl.getCohortByStudent);
cohortRouter.get(
  '/cohort-events/:cohortId/:offset/:number',
  CohortCtrl.getEventsByCohort
);

module.exports = cohortRouter;
