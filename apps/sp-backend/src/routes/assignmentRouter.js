const express = require('express');

const AssignmentCtrl = require('../controllers/assignmentController');

const assignmentRouter = express.Router();

assignmentRouter.post('/assignment', AssignmentCtrl.createAssignment);
assignmentRouter.get('/assignments', AssignmentCtrl.getAssignments);
assignmentRouter.put('/assignment/:id', AssignmentCtrl.updateAssignment);
assignmentRouter.delete('/assignment/:id', AssignmentCtrl.deleteAssignment);

module.exports = assignmentRouter;
