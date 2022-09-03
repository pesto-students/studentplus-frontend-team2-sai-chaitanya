const Cohort = require('../models/cohortModel');
const okta = require('@okta/okta-sdk-nodejs');
const asyncHandler = require('express-async-handler');
const { ObjectId } = require('mongodb');

// Assumes configuration is loaded via yaml or environment variables
const client = new okta.Client();

createCohort = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a cohort',
    });
  }

  const cohort = new Cohort(body);

  if (!cohort) {
    return res.status(400).json({ success: false, error: err });
  }

  cohort
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Cohort created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'Student not created!',
      });
    });
};

module.exports = {
  createCohort,
};
