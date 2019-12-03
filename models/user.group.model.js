const mongoose = require('mongoose');

const UserGroupSchema = new mongoose.Schema({
    idUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    idGroup:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    type:{
        type:String,
        required: true
    }
}, { timestamps: true });

const UserGroup = mongoose.model('UserFriend', UserGroupSchema);

module.exports = UserGroup;