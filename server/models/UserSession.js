

const mongoose = require('mongoose');
const UserSessionSchema = new mongoose.Schema({
	// PRIMARY KEY
	// userId is the Mongo Document id for the User
	// mongo creates _id on all docs
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model('UserSession', UserSessionSchema);