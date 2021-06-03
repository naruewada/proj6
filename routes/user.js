var express = require('express'),
    router = express.Router(),
    User    = require('../models/user');


router.get('/profile/private/:id', isLoggedIn, function (req, res) {
    User.findById(req.params.id).exec(function (err, foundUsers) {
        if (err) {
            console.log(err);
        } else {
            User.findById(req.params.id).populate('likes').exec(function(err, likedMovies){
                if (err) {
                    console.log(err);
                } else {
                    res.render('mypage.ejs', { User: foundUsers, movie: likedMovies });
                }
            });
        }
    });
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};



module.exports = router;