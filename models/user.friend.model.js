const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    idUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    idFriend:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: true });

const Friend = mongoose.model('UserFriend', friendSchema);

module.exports = Friend;