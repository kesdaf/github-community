const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name needs at last 8 chars'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name needs at last 8 chars'],
        trim: true
    },
    interest:{
        type:[String]
    }
}, { timestamps: true });

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;