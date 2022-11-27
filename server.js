const express =  require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const  cors = require('cors');

const app = express();
const axios = require('axios');
mongoose.connect(process.env.MONGOOSE_CONNECTION ,
{
useNewUrlParser: true,
useUnifiedTopology: true
},() => console.log('DB Connected'))
app.use(express.json());
app.use(cors());
app.use(fileUpload()); 
const PORT = process.env.PORT || 9000;



const userRoute = require("./routes/User");
const postRoute = require("./routes/Post");
const storyRoute = require("./routes/Story");


app.use('/users',userRoute);
app.use('/posts',postRoute);
app.use('/stories',storyRoute);

app.get('/',(req,res) => {
      
       res.send('Welcome to Nightchillins :)')

})


app.get('/news',async (req,res) => {
     try{
      const { data } = await axios.get(process.env.NEWS_API);
      res.send(data);
    }catch(error){  
      res.send(error.message);
    }  
})


app.listen(PORT,() => {console.log('server is working')})
// 7a57ce0f-b805-48b0-8405-b8ee3fb06e84
// aajmnqyz
// mongodb+srv://bidesh:<password>@cluster0.jeepdfc.mongodb.net/test
//jmixsgj4