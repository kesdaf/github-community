const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    idUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    url:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    date:{
        type:String
    },
    language:String
}, { timestamps: true });

const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;