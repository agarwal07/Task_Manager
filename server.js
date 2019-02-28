var {mongoose}=require('./backend/db/db');
var {taskmodel}=require('./backend/models/user');
var {admin}=require('./backend/models/admin');
var {login}=require('./backend/models/user');
var {reminder}=require('./backend/models/reminder');
var {add}=require('./backend/models/add');
var {create}=require('./backend/models/create');
var {authenticate} = require('./backend/middleware/authenticate');
var express=require('express');
var app = express();
const _ =require('lodash');
//var multer = require('multer');
//var upload = multer();
const rout = express.Router();
var bodyParser = require('body-parser');
//var cors = require('cors');
const {ObjectID} = require('mongodb');
const bcrypt=require('bcryptjs');

app.use(function(req, res, next) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Origin,x-auth, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Expose-Headers","x-auth");
    next();
});
app.use(bodyParser.json());
//app.use(cors());
// app.get('/', (req, res) => res.send('Hello World!'))

// app.post('/register').post(function (req, res) {
	
  
// });


// app.post('/addsong',(req,res)=>{
// 	 var songdata = new song(req.body);
// 	 console.log(songdata);
//   songdata.save()
//     .then(item => {
//     	//console.log(song);
//       res.send(JSON.stringify('song saved to database'));
//     })
//     .catch(err => {
//       res.status(400).send(JSON.stringify('not saved to database'));
//     });
// });

// app.get('/findsong',(req,res)=>{
//   //console.log(req.query);
  
//   console.log(req.query['songname']);
//    song.find({songname : req.query['songname']}).then((docs)=>{
//        res.send(docs)
//        console.log('done');
//    }).catch((err)=>{
//        res.status(400).send(err);
//    }) 

// });
// app.get('/find',(req,res)=>{
//     //console.log(req.query);
    
//     console.log(req.query['category']);
//      song.find({catagory : req.query['category']}).then((docs)=>{
//          res.send(docs)
//          console.log('done');
//      }).catch((err)=>{
//          res.status(400).send(err);
//      }) 
  
//   });



//api of register page
app.post('/info',(req,res)=>{
    var body = _.pick(req.body,['contact','name','password1','gender']);
     var newUser = new login(body);
     console.log(newUser);
    newUser.save().then(()=>{
             console.log('saved');
             res.send();

    })
});


//api of login admin page
app.post('/cuslogin',(req,res)=>{
   var body =new admin (req.body,['email','password']);
  console.log(body);
 admin.login(body.email,body.password).then((user)=>{
        res.send(user);
    });
});     
        
      //api of contact page  
app.get('/login',(req,res)=>{
    
  login.find({contact:req.query['contact']}).then((result) => {
     
         if(!result)
            {
                console.log(result);
                return res.status(400).send();
            }
         res.send();

            }).catch((err) => {
               res.status(401).send(err);
            }
    );

    });
     //Api of reminder page
    app.post('/reminder',(req,res)=>{
        var body = _.pick(req.body,['title','date','time']);
         var newUser = new reminder(body);
         console.log(newUser);
        newUser.save().then(()=>{
                 console.log('saved');
                 res.send();
    
        })
    });
    //Api of Addtask
    app.post('/add',(req,res)=>{
        console.log(res);
        var body = _.pick(req.body,['first','second','third']);
        console.log(body); 
        var newUser = new add(body);
         console.log(newUser);
        newUser.save().then(()=>{
                 console.log('saved');
                 res.send();
    
        })
    });
// //Api of create new list
//     app.post('/create',(req,res)=>{
//         console.log(res);
//         var body = _.pick(['title']);
//         console.log(body); 
//         var newUser = new create(body);
//          console.log(newUser);
//         newUser.save().then(()=>{
//                  console.log('saved');
//                  res.send();
    
//         })
//     });

    /////

    app.get('/findtitle',(req,res)=>{
        //console.log(req.query);
        
        console.log(req.query['title']);
         song.find({title : req.query['title']}).then((docs)=>{
             res.send(docs)
             console.log('done');
         }).catch((err)=>{
             res.status(400).send(err);
         }) 
      
      });




   

    
         
    





 let port = process.env.PORT || 3000;
  const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });

