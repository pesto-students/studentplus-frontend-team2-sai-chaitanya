const Assignment = require('../models/assignmentModel');
const asyncHandler = require('express-async-handler');
const { ObjectId } = require('mongodb');

const { singlePrivateFileUpload, retrievePrivateFile } = require('../../awsS3');

createAssignment = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide assignment data',
    });
  }

  const assignment = new Assignment(body);

  if (!assignment) {
    return res.status(400).json({ success: false, error: err });
  }

  assignment.save()
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Assignment created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'Assignment not created!',
      });
    });
};

updateAssignment = asyncHandler(async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }
  const assignment = await Assignment.findById({
    _id: ObjectId(req.params.id),
  });
  if (!assignment) {
    return res.status(400).json({ success: false, error: err });
  }

  assignment.assignmentTitle = body.assignmentTitle;
  assignment.cohorts = body.cohorts;
  assignment.desc = body.desc;
  assignment.fileLink = body.fileLink;
  assignment.programWeek = body.programWeek;
  assignment.assignmentSNo = body.assignmentSNo
  assignment
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: assignment._id,
        message: 'Assignment updated!',
      });
    })
    .catch((error) => {
      return res.status(404).json({
        error,
        message: 'Assignment not updated!',
      });
    });
});

getAssignments = asyncHandler(async (req, res) => {
  const assignments = await Assignment.find({});
  res.json(assignments);
});

deleteAssignment = async (req, res) => {
  const response = await Assignment.findOneAndDelete({
    _id: ObjectId(req.params.id),
  });
  res.json(response);
};

uploadAssignment = async (req, res) => {
  const key = await singlePrivateFileUpload(req.file);
  console.log('singresp', key);
  res.json(key);
};

getAssignmentFile = async (req, res) => {
  const file = retrievePrivateFile(req.params.key);
  res.json(file);
};

module.exports = {
  createAssignment,
  updateAssignment,
  getAssignments,
  deleteAssignment,
  uploadAssignment,
  getAssignmentFile,
};
