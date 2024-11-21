 const express=require("express");
 const mongojs=require("mongojs");
 const bodyParser=require("body-parser");
const app=express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
var db=mongojs("mongodb+srv://jaswanthvarma:jaswanthvarma@cluster1.dyfqfx7.mongodb.net/netflix_clone",["userlogin"]);
app.get("/",cors(),(req,res)=>{
    res.send("hello");
})
var  userinfo="";
app.post("/userlogin",async(req,res)=>{
    var data=JSON.parse(Object.keys(req.body));
    db.userlogin.find({email:data.email,password:data.password},function(err,docs){
        if(docs.length>=1){
            userinfo=docs;
            
        }
        else{
            res.json({status:"false"});
        }
    });
    db.watchlist.find({name:data.email},function(err,docs){
        console.log(docs)
        res.json({status:"true",data:{'data':userinfo,'watch':docs}});
    })
  //  console.log(data)
})
app.post("/updateCart",(req,res)=>{
    var getarr=Object.keys(req.body);
    console.log(req.body)
    var temp=[];
    getarr.map((dt)=>{
       console.log(dt);
        //temp.push(JSON.parse(dt));
    })
    
    
})
app.get("/getlist",(req,res)=>{
    db.watchlist.find({name:username},function(err,docs){
        res.json(docs)
    })
})
app.post("/watch",(req,res)=>{
    var items=JSON.parse(Object.keys(req.body));
    let data=[];
    db.watchlist.find({name:username},function(err,docs){
           if(docs.length>0){
            docs[0].list.forEach(doc=> {
                data.push(doc);
                
            });
        }
            data.push(items);
        db.watchlist.remove({ name: username }, { multi: true }, (err, result) => {
        if (err) {
          console.error('Error deleting documents:', err);
        } else {
          console.log(result.deletedCount + ' documents deleted');
        }
      });
    db.watchlist.insert({name:username,list:data},function(err,data){
        console.log("inserted");
     })
   // console.log(data);
})
})
app.post("/usersignup",async(req,res)=>{
    var data=JSON.parse(Object.keys(req.body));
    db.userlogin.find({email:data.email,password:data.password},function(err,docs){
        if(docs.length>=1){
            res.json({status:"exist"});
        }
        else{
            var date=new Date();
            var getdate=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()
            db.userlogin.insert({username:data.username,email:data.email,password:data.password,plan:data.plan,subscription:getdate},function(err,docs){
                res.json({status:"true"});
            })
        }
    });
})
app.listen(8000,()=>{
    console.log("server is started");
})
