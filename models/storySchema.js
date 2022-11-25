 const mongoose = require('mongoose');

const StoriesSchema = new mongoose.Schema({
	

Description:{
  type:String,
  required:true
},
PostUrl:{
  type:String,
  required:true
},
Userid:{
	type:String,
	required:true
},
When:{
  type:Number,
  required:true
 }

});

 
 const StoryModel = mongoose.model("stories",StoriesSchema);


module.exports = StoryModel;