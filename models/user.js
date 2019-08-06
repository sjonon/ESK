const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: { type: Number, required: true, unique: true },
    userType: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true },
    googleID: { type: String, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
