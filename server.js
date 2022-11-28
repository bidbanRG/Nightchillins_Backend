const express =  require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const  cors = require('cors');

const app = express();
app.use(cors({
     origin:"*",
}));
// app.options('*', cors())
// app.options('/posts', cors());
// app.options('/users/getusers', cors())
// app.options('/users/login', cors())
// app.options('/users/getbyId', cors())
// app.options('/users/changeprofile', cors())
// app.options('/stories', cors())
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader('Access-Control-Allow-Origin', `*`);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const axios = require('axios');
mongoose.connect(process.env.MONGOOSE_CONNECTION ,
{
useNewUrlParser: true,
useUnifiedTopology: true
},() => console.log('DB Connected'))
app.use(express.json());

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