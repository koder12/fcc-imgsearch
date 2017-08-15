var tungus = require('tungus');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var searchSchema = Schema({
    term: String,
    when: Date
});

module.exports = mongoose.model('search', searchSchema);