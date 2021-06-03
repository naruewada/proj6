var express     = require('express'),
    router      = express.Router(),
    Movie       = require('../models/movie');

// router.get('/', function(req, res){
//     Movie.find({}, function(err, allMovies){
//         if(err){
//             console.log(err);
//         } else {
//             res.render('home.ejs',{movie: allMovies});
//         }
//     });
// });

router.get('/', function(req, res){
    Movie.find({}, function(err, allMovies){
        if(err){
            console.log(err);
        } else {
            Movie.find().sort({rating: -1}).limit(3).exec(function(err, rankMovies){
                if(err){
                    console.log.apply(err);
                } else {
                    res.render('home.ejs', {movie: allMovies, Ranks: rankMovies});
                }
            });
        }
    });
}); 