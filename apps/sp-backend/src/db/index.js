const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://student-plus:MhkSMQrF6uts4Puk@clustersp.lbmqpcv.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
  )
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
