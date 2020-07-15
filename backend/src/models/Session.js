const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, default: null },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
