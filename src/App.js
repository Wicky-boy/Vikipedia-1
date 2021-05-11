const express = require("express");
const App = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT|| 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const { response } = require("express");
App.use(cors());
App.use(bodyParser.urlencoded({extended:true}));
App.use(express.urlencoded({ extended: false }));
App.use(express.json());

mongoose.connect("mongodb+srv://Admin-wiki:vignesh7550@reactdb.kfqdg.mongodb.net/ReactDB",{ useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on("connected",()=>{
  console.log("Mongoose connected with atlas successfully")
})

const userSchema = {
  name:String,
  password:String
}
const userInfoSchema ={
  username:String,
  password:String,
  userURLParams:String,
  userAnswer:[],
  response:[]
}

const opinionSchema = {
  opinion:String
}

const userDetails =mongoose.model("userData",userInfoSchema);
const userOpinion = mongoose.model("userOpinion",opinionSchema);

const user = mongoose.model("Detail",userSchema);

App.post("/fulldetails",(req,res) =>{
  const userID = req.body.id
  userDetails.find({_id:userID},(err,foundItem) =>{
    if(foundItem){
      res.send(foundItem)
    }else{
      console.log(err)
    }
  })
});

App.post("/login",(req, res) => {
  
  const userName = req.body.name;
  const userInfo = req.body.password;
  console.log(userName,userInfo)
  userDetails.find({username:userName,password:userInfo},(err,foundItem)=>{
    if(foundItem.length > 0){

      res.send([true,foundItem[0]._id])
    }else{
      res.send([false,"You have entered invalid UserName or Password.................."])
    }
  });
});
App.post("/register",(req,res) =>{
  const userName = req.body.name;
  const userPassword = req.body.password;
  userDetails.insertMany({username:userName,password:userPassword,userURLParams:userName+"user123",userAnswer:[],response:[]},(err) =>{if(!err){user.find({},(err,foundItem) =>{if(!err){
    res.send("the userID : "+userName+" and password : "+userPassword+" has been successfully inserted into DB")
    console.log("Successfully inserted into Database...")}})}})
});

App.post("/home",(req,res)=>{
  const userID = req.body.id
  userDetails.findOne({_id:userID},(err,foundItem) =>{
      if(foundItem){
        res.send(foundItem)
      }else{
        res.send("No match found")
      }
  })
});

App.post("/questionanswer",(req,res) =>{
  const ID = req.body.details.id
  const value = req.body.details.answer
  userDetails.updateOne({_id:ID},{$push:{userAnswer:value}},(err) =>{
    if (!err) {
      res.send("Updated successfully")
    }else{
      res.send(err)
    }
  })
});
App.post("/response",(req,res) =>{
  const ID = req.body.details.id
  const value = req.body.details.answer
  userDetails.updateOne({_id:ID},{$push:{response:value}},(err) =>{
    if (!err) {
      res.send("Updated successfully")
    }else{
      res.send(err)
    }
  })
});

App.post("/score",(req,res) =>{
  const ID = req.body.id
  const score = req.body.score
  const Index = req.body.index
  const name = req.body.name
  userDetails.updateOne(
    { _id:ID, "response.Name": name },
    { $set: { "response.$.score" : score } },(err) =>{
      console.log("Successfully updated....")
    }
 )
  console.log(ID,Index,score)
});

App.post("/opinion",(req,res)=>{
  const newOpinion = req.body.opinion;
  console.log(newOpinion)
  userOpinion.insertMany({opinion:newOpinion},(err) =>{
    if(!err){
      res.send("your response has been recorded")
    }else if(err){
      console.log(err)
      res.send("Something went wrong in server side...")
    }
  })
})


if(process.env.NODE_ENV ==="production"){
  App.use(express.static("../my-app/build"));
}

App.listen(PORT, () => console.log("Server started on  port "+PORT));

  