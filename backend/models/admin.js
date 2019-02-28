const mongoose = require('mongoose');
var admin1=mongoose.Schema({

    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        minlength:8
    }
    // tokens:{type:String }
});

admin1.statics.login = function(email,password){
    var User = this;
   // console.log(contact);
    return User.findOne({email}&&{password}).then((user)=>{
        if(!user){
            //console.log('not found');
            return Promise.reject();
            }
            console.log('done');
            return user;

       
               
            });
        

 };

var admin = mongoose.model('admin',admin1);
module.exports={admin};