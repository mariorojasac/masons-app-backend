const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    profilePic: { type: String, required: true },
    admin: { type: Boolean, default: false },
    userId: { type: String, unique: true, required: true },
    cards : [cardSchema]
  },
  { timestamps: true }
);

const cardSchema = new Schema(
  {
    title: String,
    picture: String,
    description: String,
    sound: String,
    type: String,
    authorId: String,
  },
  { timestamps: true }
);         


module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("Card", cardSchema)