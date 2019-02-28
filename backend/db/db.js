var mongoose=require('mongoose');
//mongoose.promise=global.promise;
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/todo');
module.exports={mongoose};