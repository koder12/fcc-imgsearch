var express = require('express');
var router = express.Router();
var tungus = require('tungus');
var mongoose = require('mongoose');
var imgur = require('../imgur');

var search = require('../models/search');

function saveSearch(q){
    var s = new search({
        term: q,
        when: new Date()
    });

    s.save(function(err){
        if(err){
            console.log(err);
        }
    });
}

router.get('/imagesearch/:search', function(req, res){
    var q = req.params.search;
    var p = req.query.offset;
    new search({
        term: q
    }).save(function(err){
        console.log(err);
    });
    imgur.search( q, p, function (a) {
       return res.send(a);
    });
});

router.get('/imagesearch', function(req, res){
    search.find({}, '-_id -__v').limit(10).exec(function(err, searches){
        return res.send(searches);
    });
});

module.exports = router;