const mongoose = require("mongoose");
const Schema = mongoose.Schema;



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


const userSchema = new Schema(
  {
    name: String,
    username: String,
    password: String,
    email: String,
    profilePic: String,
    admin: {
      type: Boolean,
      default: false,
    },
    userId: String,
    cards: [cardSchema],
  },
  { timestamps: true }
);



module.exports = mongoose.model("User", userSchema);
