const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    // set up properties for a TODO
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const Books = mongoose.model('Books', BookSchema);

module.exports = Books;