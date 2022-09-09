const express = require('express');

const CohortCtrl = require('../controllers/cohortController');

const cohortRouter = express.Router();

cohortRouter.post('/cohort', CohortCtrl.createCohort);
cohortRouter.get('/cohorts', CohortCtrl.getCohorts);
cohortRouter.get('/cohort/:id', CohortCtrl.getCohortById);
cohortRouter.get('/student-cohort/:cohortId', CohortCtrl.getCohortByStudent);

module.exports = cohortRouter;
