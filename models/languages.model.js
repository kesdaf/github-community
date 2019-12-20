const mongoose = require('mongoose');

const languagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    value:{
        type: String,
        required: [true, 'Value is required'],
        trim: true
    }
}, { timestamps: false });

const language = mongoose.model('Languages', languagesSchema);

module.exports = language;