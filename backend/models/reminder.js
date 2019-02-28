const mongoose = require('mongoose');
var reminder1=mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true,
    
    },
    time:{
        type:String,
        require:true,
    }
    });

    var reminder = mongoose.model('reminder',reminder1);
module.exports={reminder};