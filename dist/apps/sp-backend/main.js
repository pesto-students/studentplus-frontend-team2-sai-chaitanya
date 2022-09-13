/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/sp-backend/src/controllers/assignmentController.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const tslib_1 = __webpack_require__("tslib");
const Assignment = __webpack_require__("./apps/sp-backend/src/models/assignmentModel.js");
const asyncHandler = __webpack_require__("express-async-handler");
const { ObjectId } = __webpack_require__("mongodb");
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
updateAssignment = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }
    const assignment = yield Assignment.findById({
        _id: ObjectId(req.params.id),
    });
    if (!assignment) {
        return res.status(400).json({ success: false, error: err });
    }
    assignment.assignmentTitle = body.assignmentTitle;
    assignment.cohorts = body.cohorts;
    assignment.desc = body.desc;
    assignment.deckLink = body.deckLink;
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
}));
getAssignments = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const assignments = yield Assignment.find({});
    res.json(assignments);
}));
deleteAssignment = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield Assignment.findOneAndDelete({
        _id: ObjectId(req.params.id),
    });
    res.json(response);
});
module.exports = {
    createAssignment,
    updateAssignment,
    getAssignments,
    deleteAssignment,
};


/***/ }),

/***/ "./apps/sp-backend/src/controllers/cohortController.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const tslib_1 = __webpack_require__("tslib");
const Cohort = __webpack_require__("./apps/sp-backend/src/models/cohortModel.js");
const okta = __webpack_require__("@okta/okta-sdk-nodejs");
const asyncHandler = __webpack_require__("express-async-handler");
const { ObjectId } = __webpack_require__("mongodb");
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
getCohortById = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const cohort = yield Cohort.findById({ _id: ObjectId(req.params.id) });
    if (cohort) {
        res.json(cohort);
    }
    else {
        res.status(404).json({ message: 'Cohort not found' });
        res.status(404);
        throw new Error('Cohort not found');
    }
}));
getCohortByStudent = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const query = { cohortId: req.params.cohortId };
    const cohort = yield Cohort.findOne(query);
    if (cohort) {
        res.json(cohort);
    }
    else {
        res.status(404).json({ message: 'Cohort not found' });
        res.status(404);
        throw new Error('Cohort not found');
    }
}));
getCohorts = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const cohorts = yield Cohort.find({});
    res.json(cohorts);
}));
module.exports = {
    createCohort,
    getCohorts,
    getCohortById,
    getCohortByStudent,
};


/***/ }),

/***/ "./apps/sp-backend/src/controllers/commentController.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const tslib_1 = __webpack_require__("tslib");
const Comment = __webpack_require__("./apps/sp-backend/src/models/commentModel.js");
const asyncHandler = __webpack_require__("express-async-handler");
const { ObjectId } = __webpack_require__("mongodb");
createComment = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide comment data',
        });
    }
    const comment = new Comment(body);
    if (!comment) {
        return res.status(400).json({ success: false, error: err });
    }
    comment
        .save()
        .then(() => {
        return res.status(200).json({
            success: true,
            message: 'Comment created!',
        });
    })
        .catch((error) => {
        return res.status(400).json({
            error,
            message: 'Comment not created!',
        });
    });
};
getComments = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const query = { discussionId: req.params.discussionId };
    console.log(query);
    const comments = yield Comment.find(query);
    console.log(comments);
    if (comments) {
        res.json(comments);
    }
    else {
        res.status(404).json({ message: 'comments not found' });
        res.status(404);
        throw new Error('comments not found');
    }
}));
module.exports = {
    createComment,
    getComments,
};


/***/ }),

/***/ "./apps/sp-backend/src/controllers/discussionController.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const tslib_1 = __webpack_require__("tslib");
const Discussion = __webpack_require__("./apps/sp-backend/src/models/discussionModel.js");
const asyncHandler = __webpack_require__("express-async-handler");
const { ObjectId } = __webpack_require__("mongodb");
createDiscussion = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide discussion data',
        });
    }
    const discussion = new Discussion(body);
    if (!discussion) {
        return res.status(400).json({ success: false, error: err });
    }
    discussion
        .save()
        .then(() => {
        return res.status(200).json({
            success: true,
            message: 'Discussion created!',
        });
    })
        .catch((error) => {
        return res.status(400).json({
            error,
            message: 'Discussion not created!',
        });
    });
};
updateDiscussion = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }
    const discussion = yield Discussion.findById({ _id: ObjectId(req.params.id) });
    if (!discussion) {
        return res.status(400).json({ success: false, error: err });
    }
    discussion.discussionTitle = body.discussionTitle;
    discussion.cohorts = body.cohorts;
    discussion.boardDesc = body.boardDesc;
    discussion.deckLink = body.deckLink;
    discussion.assignments = body.assignments;
    discussion
        .save()
        .then(() => {
        return res.status(200).json({
            success: true,
            id: discussion._id,
            message: 'Discussion updated!',
        });
    })
        .catch((error) => {
        return res.status(404).json({
            error,
            message: 'Discussion not updated!',
        });
    });
}));
getDiscussions = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const discussions = yield Discussion.find({});
    res.json(discussions);
}));
deleteDiscussion = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield Discussion.findOneAndDelete({ _id: ObjectId(req.params.id) });
    res.json(response);
});
getDiscussionsByCohort = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const query = { cohorts: req.params.cohortId };
    const discussions = yield Discussion.find(query);
    res.json(discussions);
}));
module.exports = {
    createDiscussion,
    updateDiscussion,
    getDiscussions,
    deleteDiscussion,
    getDiscussionsByCohort,
};


/***/ }),

/***/ "./apps/sp-backend/src/controllers/eventController.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const tslib_1 = __webpack_require__("tslib");
const Event = __webpack_require__("./apps/sp-backend/src/models/eventModel.js");
const asyncHandler = __webpack_require__("express-async-handler");
const { ObjectId } = __webpack_require__("mongodb");
createEvent = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide event data',
        });
    }
    const event = new Event(body);
    if (!event) {
        return res.status(400).json({ success: false, error: err });
    }
    event
        .save()
        .then(() => {
        return res.status(200).json({
            success: true,
            message: 'Event created!',
        });
    })
        .catch((error) => {
        return res.status(400).json({
            error,
            message: 'Event not created!',
        });
    });
};
getEvents = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const events = yield Event.find({});
    res.json(events);
}));
module.exports = {
    createEvent,
    getEvents,
};


/***/ }),

/***/ "./apps/sp-backend/src/controllers/managerController.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const tslib_1 = __webpack_require__("tslib");
const Manager = __webpack_require__("./apps/sp-backend/src/models/managerModel.js");
const okta = __webpack_require__("@okta/okta-sdk-nodejs");
const asyncHandler = __webpack_require__("express-async-handler");
const { ObjectId } = __webpack_require__("mongodb");
// Assumes configuration is loaded via yaml or environment variables
const client = new okta.Client();
createManager = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a student',
        });
    }
    const manager = new Manager(body);
    if (!manager) {
        return res.status(400).json({ success: false, error: err });
    }
    manager
        .save()
        .then(() => {
        const newUser = {
            profile: {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                login: body.email,
                studentid: manager._id,
            },
            credentials: {
                password: {
                    value: body.password,
                },
            },
        };
        client.createUser(newUser).then((user) => {
            const studentId = manager._id;
            return res.status(200).json({
                success: true,
                studentId: studentId,
                user: user,
                message: 'Manager created!',
            });
        });
    })
        .catch((error) => {
        return res.status(400).json({
            error,
            message: 'Manager not created!',
        });
    });
};
updateManager = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }
    const manager = yield Manager.findById({ _id: ObjectId(req.params.id) });
    if (!manager) {
        return res.status(400).json({ success: false, error: err });
    }
    manager.firstName = body.firstName;
    manager.lastName = body.lastName;
    manager.email = body.email;
    manager.url = body.url;
    manager.phone = body.phone;
    manager.city = body.city;
    manager.state = body.state;
    manager.streetAddr = body.streetAddr;
    manager.about = body.about;
    manager.img = body.img;
    manager
        .save()
        .then(() => {
        return res.status(200).json({
            success: true,
            id: manager._id,
            message: 'Manager updated!',
        });
    })
        .catch((error) => {
        return res.status(404).json({
            error,
            message: 'Manager not updated!',
        });
    });
}));
getManagerById = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const manager = yield Manager.findById({ _id: ObjectId(req.params.id) });
    if (manager) {
        res.json(manager);
    }
    else {
        res.status(404).json({ message: 'User not found' });
        res.status(404);
        throw new Error('User not found');
    }
}));
/* getManagers = asyncHandler(async (req, res) => {
  const managers = await Manager.find({});
  res.json(managers);
}); */
/* changePassword = asyncHandler(async (req, res) => {
  client.getUser(req.body.email).then((user) => {
    console.log('orginal', req.body.confirmPassword);
    console.log('entered', req.body.password);
    if (req.body.confirmPassword == req.body.password) {
    user.credentials.password = req.body.password;
    user.update().then(() => {
         res.status(200).json({ message: 'Password Updated!' });
    }
    );
  } else {
    res.status(400).json({ message: 'Password and confirm password did not match!' });
  }
  });
}); */
/* getOktaUser = asyncHandler(async (req, res) => {
    const students = await Student.find({});
    students.map((student)=>{
          client.getUser(student.email).then((user) => {
       user.credentials.password = '8K29fAv5@123';
       user.profile.studentid = student._id;
        user.update().then(() => console.log(`${student.email} user's password changed`));
      });
    });
}); */
module.exports = {
    createManager,
    updateManager,
    getManagerById,
};


/***/ }),

/***/ "./apps/sp-backend/src/controllers/studentController.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const tslib_1 = __webpack_require__("tslib");
const Student = __webpack_require__("./apps/sp-backend/src/models/studentModel.js");
const okta = __webpack_require__("@okta/okta-sdk-nodejs");
const asyncHandler = __webpack_require__("express-async-handler");
const { ObjectId } = __webpack_require__("mongodb");
// Assumes configuration is loaded via yaml or environment variables
const client = new okta.Client();
createStudent = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a student',
        });
    }
    const student = new Student(body);
    if (!student) {
        return res.status(400).json({ success: false, error: err });
    }
    student
        .save()
        .then(() => {
        const newUser = {
            profile: {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                login: body.email,
                studentid: student._id,
            },
            credentials: {
                password: {
                    value: body.password,
                },
            },
        };
        client.createUser(newUser).then((user) => {
            const studentId = student._id;
            return res.status(200).json({
                success: true,
                studentId: studentId,
                user: user,
                message: 'Student created!',
            });
        });
    })
        .catch((error) => {
        return res.status(400).json({
            error,
            message: 'Student not created!',
        });
    });
};
updateStudent = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }
    const student = yield Student.findById({ _id: ObjectId(req.params.id) });
    if (!student) {
        return res.status(400).json({ success: false, error: err });
    }
    student.firstName = body.firstName;
    student.lastName = body.lastName;
    student.email = body.email;
    student.url = body.url;
    student.phone = body.phone;
    student.city = body.city;
    student.state = body.state;
    student.streetAddr = body.streetAddr;
    student.about = body.about;
    student.img = body.img;
    student
        .save()
        .then(() => {
        return res.status(200).json({
            success: true,
            id: student._id,
            message: 'Student updated!',
        });
    })
        .catch((error) => {
        return res.status(404).json({
            error,
            message: 'Student not updated!',
        });
    });
}));
getStudentById = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const student = yield Student.findById({ _id: ObjectId(req.params.id) });
    if (student) {
        res.json(student);
    }
    else {
        res.status(404).json({ message: 'Student not found' });
        res.status(404);
        throw new Error('Student not found');
    }
}));
getStudents = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const students = yield Student.find({});
    res.json(students);
}));
changePassword = asyncHandler((req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    client.getUser(req.body.email).then((user) => {
        console.log('orginal', req.body.confirmPassword);
        console.log('entered', req.body.password);
        if (req.body.confirmPassword == req.body.password) {
            user.credentials.password = req.body.password;
            user.update().then(() => {
                res.status(200).json({ message: 'Password Updated!' });
            });
        }
        else {
            res.status(400).json({ message: 'Password and confirm password didnot match!' });
        }
    });
}));
/* getOktaUser = asyncHandler(async (req, res) => {
    const students = await Student.find({});
    students.map((student)=>{
          client.getUser(student.email).then((user) => {
       user.credentials.password = '8K29fAv5@123';
       user.profile.studentid = student._id;
        user.update().then(() => console.log(`${student.email} user's password changed`));
      });
    });
}); */
module.exports = {
    createStudent,
    updateStudent,
    getStudentById,
    getStudents,
    changePassword,
};


/***/ }),

/***/ "./apps/sp-backend/src/db/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__("mongoose");
mongoose
    .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
})
    .catch((e) => {
    console.error('Connection error', e.message);
});
const db = mongoose.connection;
module.exports = db;


/***/ }),

/***/ "./apps/sp-backend/src/models/assignmentModel.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__("mongoose");
const Schema = mongoose.Schema;
const Assignment = new Schema({
    assignmentTitle: { type: String, required: true },
    cohorts: { type: Array, required: false },
    desc: { type: String, required: false },
    deckLink: { type: String, required: false },
}, { timestamps: true });
module.exports = mongoose.model('assignment', Assignment);


/***/ }),

/***/ "./apps/sp-backend/src/models/cohortModel.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__("mongoose");
const Schema = mongoose.Schema;
const Cohort = new Schema({
    cohortId: { type: String, required: true },
    cohortType: { type: String, required: false },
    assignments: { type: Array, required: false },
    students: { type: Array, required: false },
    events: { type: Array, required: false },
    discussions: { type: Array, required: false },
    statrtAt: { type: String, required: false },
    endAt: { type: String, required: false },
    programManager: { type: String, required: false },
    phone: { type: String, required: false },
    status: { type: String, required: false },
    studentCount: { type: String, required: false },
    activeStudentCount: { type: String, required: false },
    deferredStudentCount: { type: String, required: false },
}, { timestamps: true });
module.exports = mongoose.model('cohort', Cohort);


/***/ }),

/***/ "./apps/sp-backend/src/models/commentModel.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__("mongoose");
const Schema = mongoose.Schema;
const Comment = new Schema({
    discussionId: { type: String, required: true },
    textMessage: { type: Array, required: false },
    user: { type: Object, required: false },
}, { timestamps: true });
module.exports = mongoose.model('comment', Comment);


/***/ }),

/***/ "./apps/sp-backend/src/models/discussionModel.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__("mongoose");
const Schema = mongoose.Schema;
const Discussion = new Schema({
    discussionTitle: { type: String, required: true },
    cohorts: { type: Array, required: false },
    boardDesc: { type: String, required: false },
    deckLink: { type: String, required: false },
    assignments: { type: Array, required: false },
}, { timestamps: true });
module.exports = mongoose.model('discussion', Discussion);


/***/ }),

/***/ "./apps/sp-backend/src/models/eventModel.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__("mongoose");
const Schema = mongoose.Schema;
const Event = new Schema({
    eventTitle: { type: String, required: true },
    cohorts: { type: Array, required: true },
    eventLink: { type: String, required: true },
    password: { type: String, required: false },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    docSource: { type: String, required: false },
    description: { type: String, required: false },
}, { timestamps: true });
module.exports = mongoose.model('event', Event);


/***/ }),

/***/ "./apps/sp-backend/src/models/managerModel.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__("mongoose");
const Schema = mongoose.Schema;
const Manager = new Schema({
    email: { type: String, required: true },
    alternateId: { type: String, required: false },
    firstName: { type: String, required: true },
    cohort: { type: Array, required: true },
    lastName: { type: String, required: true },
    displayName: { type: String, required: false },
    url: { type: String, required: false },
    about: { type: String, required: false },
    phone: { type: Number, required: false },
    language: { type: String, required: false },
    state: { type: String, required: false },
    city: { type: String, required: false },
    streetAddr: { type: String, required: false },
    country: { type: String, required: false },
    img: { type: String, required: false },
    password: { type: String, required: true },
    // isActive: { type: Boolean, required: false },
    // isDeffered: { type: Boolean, required: false },
    // status:{ type: String, required:false},
    // assignment: { type: Array, required: false },
    // attendance: { type: Array, required: false },
}, { timestamps: true });
module.exports = mongoose.model('managers', Manager);


/***/ }),

/***/ "./apps/sp-backend/src/models/studentModel.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__("mongoose");
const Schema = mongoose.Schema;
const Student = new Schema({
    email: { type: String, required: true },
    alternateId: { type: String, required: false },
    firstName: { type: String, required: true },
    cohort: { type: String, required: true },
    lastName: { type: String, required: true },
    displayName: { type: String, required: false },
    url: { type: String, required: false },
    about: { type: String, required: false },
    phone: { type: Number, required: false },
    language: { type: String, required: false },
    state: { type: String, required: false },
    city: { type: String, required: false },
    streetAddr: { type: String, required: false },
    country: { type: String, required: false },
    img: { type: String, required: false },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: false },
    isDeffered: { type: Boolean, required: false },
    status: { type: String, required: false },
    assignment: { type: Array, required: false },
    attendance: { type: Array, required: false },
}, { timestamps: true });
module.exports = mongoose.model('students', Student);


/***/ }),

/***/ "./apps/sp-backend/src/routes/assignmentRouter.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__("express");
const AssignmentCtrl = __webpack_require__("./apps/sp-backend/src/controllers/assignmentController.js");
const assignmentRouter = express.Router();
assignmentRouter.post('/assignment', AssignmentCtrl.createAssignment);
assignmentRouter.get('/assignments', AssignmentCtrl.getAssignments);
assignmentRouter.put('/assignment/:id', AssignmentCtrl.updateAssignment);
assignmentRouter.delete('/assignment/:id', AssignmentCtrl.deleteAssignment);
module.exports = assignmentRouter;


/***/ }),

/***/ "./apps/sp-backend/src/routes/cohortRouter.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__("express");
const CohortCtrl = __webpack_require__("./apps/sp-backend/src/controllers/cohortController.js");
const cohortRouter = express.Router();
cohortRouter.post('/cohort', CohortCtrl.createCohort);
cohortRouter.get('/cohorts', CohortCtrl.getCohorts);
cohortRouter.get('/cohort/:id', CohortCtrl.getCohortById);
cohortRouter.get('/student-cohort/:cohortId', CohortCtrl.getCohortByStudent);
module.exports = cohortRouter;


/***/ }),

/***/ "./apps/sp-backend/src/routes/commentRouter.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__("express");
const CommentCtrl = __webpack_require__("./apps/sp-backend/src/controllers/commentController.js");
const commentRouter = express.Router();
commentRouter.post('/comment', CommentCtrl.createComment);
commentRouter.get('/comments/:discussionId', CommentCtrl.getComments);
module.exports = commentRouter;


/***/ }),

/***/ "./apps/sp-backend/src/routes/discussionRouter.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__("express");
const DiscussionCtrl = __webpack_require__("./apps/sp-backend/src/controllers/discussionController.js");
const discussionRouter = express.Router();
discussionRouter.post('/discussion', DiscussionCtrl.createDiscussion);
discussionRouter.get('/discussions', DiscussionCtrl.getDiscussions);
discussionRouter.get('/discussions/:cohortId', DiscussionCtrl.getDiscussionsByCohort);
discussionRouter.put('/discussion/:id', DiscussionCtrl.updateDiscussion);
discussionRouter.delete('/discussion/:id', DiscussionCtrl.deleteDiscussion);
module.exports = discussionRouter;


/***/ }),

/***/ "./apps/sp-backend/src/routes/eventRouter.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__("express");
const EventCtrl = __webpack_require__("./apps/sp-backend/src/controllers/eventController.js");
const eventRouter = express.Router();
eventRouter.post('/event', EventCtrl.createEvent);
eventRouter.get('/events', EventCtrl.getEvents);
module.exports = eventRouter;


/***/ }),

/***/ "./apps/sp-backend/src/routes/managerRouter.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__("express");
const ManagerCtrl = __webpack_require__("./apps/sp-backend/src/controllers/managerController.js");
const router = express.Router();
router.post('/manager', ManagerCtrl.createManager);
router.get('/manager/:id', ManagerCtrl.getManagerById);
router.put('/manager/:id', ManagerCtrl.updateManager);
/* router.post('/okta-student/', StudentCtrl.getOktaUser); */
module.exports = router;


/***/ }),

/***/ "./apps/sp-backend/src/routes/studentRouter.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__("express");
const StudentCtrl = __webpack_require__("./apps/sp-backend/src/controllers/studentController.js");
const router = express.Router();
router.post('/student', StudentCtrl.createStudent);
router.post('/change-password', StudentCtrl.changePassword);
router.get('/student/:id', StudentCtrl.getStudentById);
router.put('/student/:id', StudentCtrl.updateStudent);
router.get('/students', StudentCtrl.getStudents);
/* router.post('/okta-student/', StudentCtrl.getOktaUser); */
module.exports = router;


/***/ }),

/***/ "@okta/okta-sdk-nodejs":
/***/ ((module) => {

"use strict";
module.exports = require("@okta/okta-sdk-nodejs");

/***/ }),

/***/ "body-parser":
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-async-handler":
/***/ ((module) => {

"use strict";
module.exports = require("express-async-handler");

/***/ }),

/***/ "mongodb":
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

"use strict";
module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const express = __webpack_require__("express");
const bodyParser = __webpack_require__("body-parser");
const cors = __webpack_require__("cors");
const db = __webpack_require__("./apps/sp-backend/src/db/index.js");
const studentRouter = __webpack_require__("./apps/sp-backend/src/routes/studentRouter.js");
const cohortRouter = __webpack_require__("./apps/sp-backend/src/routes/cohortRouter.js");
const eventRouter = __webpack_require__("./apps/sp-backend/src/routes/eventRouter.js");
const discussionRouter = __webpack_require__("./apps/sp-backend/src/routes/discussionRouter.js");
const assignmentRouter = __webpack_require__("./apps/sp-backend/src/routes/assignmentRouter.js");
const commentRouter = __webpack_require__("./apps/sp-backend/src/routes/commentRouter.js");
const managerRouter = __webpack_require__("./apps/sp-backend/src/routes/managerRouter.js");
const app = express();
const apiPort = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//Student App API
app.use('/sapi', studentRouter);
//Admin App API
app.use('/capi', cohortRouter);
//Manager
app.use('/eapi', eventRouter);
app.use('/mapi', managerRouter);
app.use('/dapi', discussionRouter);
app.use('/aapi', assignmentRouter);
//Comment
app.use('/coapi', commentRouter);
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map