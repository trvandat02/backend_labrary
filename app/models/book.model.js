const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: String,
    img: String,
    category: String,
    author: String,
    pid: String,
    publisher: String,
    excerpt: String,
    borrowedTimes: Number,
    stored: Number
});

const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;