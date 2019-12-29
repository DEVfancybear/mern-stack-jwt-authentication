const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      }
    }
  ],
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Profile = mongoose.model("profile", ProfileSchema);
