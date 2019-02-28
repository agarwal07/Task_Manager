var {dt}=require('../models/user');
var authenticate = (req,res,next) =>{
    var token=req.header('x-auth');
    dt.findByToken(token).then((user)=>{
        if(!user){
            return new Promise.reject();
        }
        req.user=user;
        req.token=token;
        next();
    })
    .catch((error)=>{
        res.status(401).send();
    });
}

module.exports= {authenticate};