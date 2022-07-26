const express = require('express');
const cors = require('cors');

//const fileUplaod = require('express-fileupload');
const router = express.Router(); 
const mongoose = require('mongoose');
const PostModel = require('../modals/postSchema');




router.post('/',async (req,res) => {
     try{
     
     const posts = req.body;
     const newPost = new PostModel(posts);
     await newPost.save();
     res.json(posts);
   
   }
   catch(error){
     res.status(400).send(error.message);
  }

})
router.get('/',(req,res) => {
    PostModel.find({}, (err,result) => {
      if(err) res.json(err);
        res.json(result);
    })
});


module.exports = router;