 const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	

Text:String,
PostUrl:String,
Type:{
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

 
 const PostModel = mongoose.model("posts",PostSchema);


module.exports = PostModel;