const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    permission: String,
    address: String,
    img: String,
});

const AdminModel = mongoose.model("admins", AdminSchema);

module.exports = AdminModel;