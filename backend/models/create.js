const mongoose = require('mongoose');
 var creat=mongoose.Schema({
 title:{
        type:String
        
    }
    });

    var create = mongoose.model('create',creat);
module.exports={create};
