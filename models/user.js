const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Card = require('./card')       

const userSchema = new Schema(
  {
    name: String,
    username: String,
    password: String,
    email: String,
    profilePic: String,
    admin: Boolean,
    userId: String,
    cards: [Card],
  },
  { timestamps: true }
);



module.exports = mongoose.model("User", userSchema);
