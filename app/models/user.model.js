const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    permission: String,
    img: String,
    address: String,
    favorite: Array,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;