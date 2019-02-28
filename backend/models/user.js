const mongoose = require('mongoose');
//const validator = require('validator');
 const jwt=require('jsonwebtoken');
 const _ = require('lodash');
 const bcrypt=require('bcryptjs');

var task=mongoose.Schema({
    contact:{
          type:Number,
          
          minlength:10,
          require:true
    },
    name:{
        type:String,
        require:true
    },
    password1:{
        type:String,
        require:true,
        minlength:8
    },
    gender:{
        type:String,
        require:true
    },
    tokens:{type:String}

    
});
task.methods.generateAuthToken = function () {
    var user = this;
    var token = jwt.sign({_id:user._id.toHexString()},'task').toString();
    user.tokens=token;
    console.log(user.tokens);
    return user.save().then(()=>{
        return token;
    });
};

// task.statics.login = function(Contact){
//     var User = this;
//     console.log(Contact);
//     return User.findOne({Contact}).then((user)=>{
//         if(!user){
//             //console.log('not found');
//             return Promise.reject();
//         }
//         else{
//             return Promise.resolve();
//         }
//     }
//     )};

    task.pre('save',function(next){
        var user=this;
        if(user.isModified('password1')){
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(user.password1,salt,(err,hash)=>{
                    user.password1=hash;
                    next();
                });
            });
        }else{
            next();
        }      
    });

    var login = mongoose.model('login',task);
    module.exports={login};


