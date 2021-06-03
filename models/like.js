var mongoose = require('mongoose');

var likedSchema = new mongoose.Schema({
    movies: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'movies'
        },

        image: String,
        name: String
    },
    date: {
        type: Date,
        defualt: Date.now
    },
    
});

module.exports = mongoose.model('Liked', likedSchema);