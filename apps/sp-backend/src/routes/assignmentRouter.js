const express = require('express');
const { singleMulterUpload } = require('../../awsS3');

const AssignmentCtrl = require('../controllers/assignmentController');

const assignmentRouter = express.Router();

assignmentRouter.post('/assignment', AssignmentCtrl.createAssignment);
assignmentRouter.get('/assignments', AssignmentCtrl.getAssignments);
assignmentRouter.get('/assignments/:week', AssignmentCtrl.getAssignmentsByWeek);
assignmentRouter.put('/assignment/:id', AssignmentCtrl.updateAssignment);
assignmentRouter.delete('/assignment/:id', AssignmentCtrl.deleteAssignment);
assignmentRouter.post(
  '/assignment/file',
  singleMulterUpload('file'),
  AssignmentCtrl.uploadAssignment
);
assignmentRouter.get('/assignment-file/:key', AssignmentCtrl.getAssignmentFile);

module.exports = assignmentRouter;
