const Manager = require('../models/managerModel');
const okta = require('@okta/okta-sdk-nodejs');
const asyncHandler = require('express-async-handler');
const { ObjectId } = require('mongodb');

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

updateManager = asyncHandler(async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }
  const manager = await Manager.findById({ _id: ObjectId(req.params.id) });
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
});

getManagerById = asyncHandler(async (req, res) => {
  const manager = await Manager.findById({ _id: ObjectId(req.params.id) });
  if (manager) {
    res.json(manager);
  } else {
    res.status(404).json({ message: 'User not found' });
    res.status(404);
    throw new Error('User not found');
  }
});

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
