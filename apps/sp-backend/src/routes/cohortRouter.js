const express = require('express');

const CohortCtrl = require('../controllers/cohortController');

const cohortRouter = express.Router();

cohortRouter.post('/cohort', CohortCtrl.createCohort);

module.exports = cohortRouter;
