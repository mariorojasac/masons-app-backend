const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    userName: String,
    email: String,
    profilePic: String,
    admin: Boolean,
    userId: String,
    // cards: Objid,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
