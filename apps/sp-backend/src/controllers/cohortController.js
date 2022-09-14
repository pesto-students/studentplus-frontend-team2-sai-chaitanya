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
        message: 'Cohort not created!',
      });
    });
};

getCohortById = asyncHandler(async (req, res) => {
  const cohort = await Cohort.findById({ _id: ObjectId(req.params.id) });
  if (cohort) {
    res.json(cohort);
  } else {
    res.status(404).json({ message: 'Cohort not found' });
    res.status(404);
    throw new Error('Cohort not found');
  }
});

getCohortByStudent = asyncHandler(async (req, res) => {
  const query = { cohortId: req.params.cohortId };
  const cohort = await Cohort.findOne(query);
  if (cohort) {
    res.json(cohort);
  } else {
    res.status(404).json({ message: 'Cohort not found' });
    res.status(404);
    throw new Error('Cohort not found');
  }
});

getEventsByCohort = asyncHandler(async (req, res) => {
  const query = { cohortId: req.params.cohortId };
  const cohort = await Cohort.findOne(query);
  if (cohort) {
    var events = cohort.events
      .slice(req.params.offset, req.params.number)
      .map((event) => {
        return event;
      });
    res.json(events);
  } else {
    res.status(404).json({ message: 'Cohort not found' });
    res.status(404);
    throw new Error('Cohort not found');
  }
});

getCohorts = asyncHandler(async (req, res) => {
  const cohorts = await Cohort.find({});
  res.json(cohorts);
});

module.exports = {
  createCohort,
  getCohorts,
  getCohortById,
  getCohortByStudent,
  getEventsByCohort,
};
