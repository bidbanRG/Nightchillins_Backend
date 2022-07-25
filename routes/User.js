const express = require('express');
const cors = require('cors');
const URL = require('../Umri.js');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = require('../modals/userSchema');
mongoose.connect(URL)







router.post('/',async (req,res) => {
     try{
     
     const user = req.body;

     const newUser = new UserModel(user);
     await newUser.save();
     res.json(newUser);
   
   }
   catch(error){
     res.status(500);
  }

})
router.get('/getusers',(req,res) => {

   try{
     UserModel.find({} , (err,result) => {
       if(err) res.json(err);
       res.json(result);
    })
  
  }catch(err){
    res.send(err)
  }



})
router.post('/login',(req,res) => {

  const userDetails = req.body;
  
  try{
     UserModel.find(userDetails, (err,result) => {
       if(err) res.json(err);
       res.json(result);
    })
  
  }catch(err){
    res.send(err)
  }


});

router.post('/getbyId',(req,res) => {

  const userDetails = req.body;
  
  try{
     UserModel.find(userDetails, (err,result) => {
       if(err) res.json(err);
       res.json(result);
    })
  
  }catch(err){
    res.send(err)
  }


});

router.post('/changeprofile', async (req,res) => {

   const { _id, newimgUrl} = req.body;

   try{
      
     const Res = await UserModel.updateOne({_id},{$set:{imgUrl:newimgUrl}})
      
      res.sendStatus(200);
   }catch(err){
     res.send(err.message);
   }
});


module.exports = router;