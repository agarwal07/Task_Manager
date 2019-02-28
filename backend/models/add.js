 const mongoose = require('mongoose');
 

 var add1=mongoose.Schema({
 first:{
        type:String
        
    },
    second:{
        type:String
            },
    third:{
        type:String
        
    }
});

var add = mongoose.model('add',add1);
module.exports={add};