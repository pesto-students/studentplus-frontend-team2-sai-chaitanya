const express = require('express');
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
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

Sentry.init({
  dsn: 'https://c30897b7454c432cb3c5ecae198b5080@o1408470.ingest.sentry.io/6744035',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

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

app.use(Sentry.Handlers.errorHandler());

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
