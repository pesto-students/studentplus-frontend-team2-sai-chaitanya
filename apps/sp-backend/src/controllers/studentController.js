const Student = require('../models/studentModel');
const okta = require('@okta/okta-sdk-nodejs');
const asyncHandler = require('express-async-handler');
const { ObjectId } = require('mongodb');

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

updateStudent = asyncHandler(async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }
  const student = await Student.findById({ _id: ObjectId(req.params.id) });
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
});

getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById({ _id: ObjectId(req.params.id) });
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
    res.status(404);
    throw new Error('Student not found');
  }
});

getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({});
  res.json(students);
});

changePassword = asyncHandler(async (req, res) => {
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
    res.status(400).json({ message: 'Password and confirm password didnot match!' });
  }
  });
});

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
