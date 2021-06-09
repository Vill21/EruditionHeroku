const mongoose = require("mongoose");

const pack = new mongoose.Schema({
    word: {
        type: String,
        unique: true,
        required: true
    },
    question: {
        type: String,
        unique: false,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

//Words - collection in SApp db
const model = mongoose.model("Package", pack, "Words");

module.exports = model;