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


module.exports = {
  createEvent,
  getEvents,
};
