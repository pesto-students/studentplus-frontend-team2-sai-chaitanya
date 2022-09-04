const express = require('express');

const EventCtrl = require('../controllers/eventController');

const eventRouter = express.Router();

eventRouter.post('/event', EventCtrl.createEvent);
eventRouter.get('/events', EventCtrl.getEvents);

module.exports = eventRouter;
