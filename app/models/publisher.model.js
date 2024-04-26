const mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema({
    name: String,
    address: String,
});

const PublisherModel = mongoose.model("publishers", PublisherSchema);

module.exports = PublisherModel;