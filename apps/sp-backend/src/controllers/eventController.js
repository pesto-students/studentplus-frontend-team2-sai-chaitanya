const Event = require('../models/eventModel');
const asyncHandler = require('express-async-handler');
const { ObjectId } = require('mongodb');

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

getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({});
  res.json(events);
});

updateEvent = asyncHandler(async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }
  const event = await Event.findById({
    _id: ObjectId(req.params.id),
  });
  if (!event) {
    return res.status(400).json({ success: false, error: err });
  }

  event.eventTitle = body.assignmentTitle;
  event.cohorts = body.cohorts;
  event.eventLink = body.eventLink;
  event.eventPassword = body.eventPassword;
  event.startTime = body.startTime;
  event.endTime = body.endTime;
  event
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: event._id,
        message: 'Event updated!',
      });
    })
    .catch((error) => {
      return res.status(404).json({
        error,
        message: 'Event not updated!',
      });
    });
});

deleteEvent = async (req, res) => {
  const response = await Event.findOneAndDelete({
    _id: ObjectId(req.params.id),
  });
  res.json(response);
};

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
};
