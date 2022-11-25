const express = require('express');
const cors = require('cors');

const router = express.Router();
const mongoose = require('mongoose');
const StoryModel = require('../models/storySchema');




router.get('/',(req,res)=>{
  try{ 
   StoryModel.find({},(err,result)=>{
        if(err) res.send(err);
        res.json(result);
   })
   }catch(error){
   	 res.send(error);
   }
});


router.post('/', async (req,res)=>{
	const newStory = req.body;
  try{ 
     
     const uploadedStory = new StoryModel(newStory);
     await uploadedStory.save();
     res.json(uploadedStory);
   
   }catch(error){
   	 
   	 res.send(error);
   
   }

});

module.exports = router;