const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    idUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    idRepo:{
        type:String,
        required:true
    }
}, { timestamps: true });

const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;