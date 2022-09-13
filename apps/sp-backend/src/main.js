const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const studentRouter = require('./routes/studentRouter');
const cohortRouter = require('./routes/cohortRouter');
const eventRouter = require('./routes/eventRouter');
const discussionRouter = require('./routes/discussionRouter');
const assignmentRouter = require('./routes/assignmentRouter');
const managerRouter = require('./routes/managerRouter');
const commentRouter = require('./routes/commentRouter');

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
