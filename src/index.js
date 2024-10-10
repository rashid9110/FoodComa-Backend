
const express=require("express")
// const badyParser=require('body-parser')

const ServerConfig= require('./config/serverConfig')
const connectDB=require('./config/dbConfig');
// const User = require("./schema/userSchema");

const app=express();

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))

app.post('/ping',(req,res)=>{
    console.log(req.body); 
    return res.json({message: 'pong'});
});

app.listen(ServerConfig.PORT,async ()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}`);

    // const newUser=await User.create({
    //     email:"a@fs.com",
    //     password:'12345656',
    //     lastName:"mdalamrff",
    //     firstName:"rashidsdfg",
    //     mobilNumber:'9110174498',

    // });
    // console.log('Create new user .');
    // console.log(newUser);
});