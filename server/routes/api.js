const express = require('express')
const router = express.Router()
const User = require('../models/user')// ".." means one folder up
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const user = require('../models/user')
var crypto = require('crypto');
var nodemailer = require('nodemailer');
//link to my database in MongoDB with username and password
const connectionString = "mongodb+srv://AngularUser1:AngularUser1@angularsdatabase-kdtrl.azure.mongodb.net/AngularsDatabase?retryWrites=true&w=majority" //6
mongoose.connect(connectionString, { useNewUrlParser:true,useUnifiedTopology: true },err =>{//connect and action if error occur
    if(err){
        console.error('Error'+err)
    }else{console.log('connected to mongodb')}
})
token_email = ""
router.get('/',(req, res) => {
    res.send('From API route')
})
// a register api
router.post('/register', (req,res) => { // a post request to the endpoint register and get the access and response
    let userData = req.body // extract the user information from the request body
    let user = new User(userData)// cast the userData to Mongo model
    user.save((error, registeredUser)=>{ // mongo's way to save posted data
        if(error){ // if error, the log to the console
            console.log(error)
        }else {
            let payload = {subject: registeredUser._id} // use user id which as part of the token
            let token = jwt.sign(payload, 'secretKey')//use jwt to generate a token
            // let token_ts = registeredUser._id
            // let token_email = {"token":token, "email":userData.email}
            // let token_email = token.toString()+":"+userData.email.toString();
            res.status(200).send({token})
            url="http://localhost:3000/confirmation/${emailToken}";

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'wangchu0211',
                    pass: 'DanDan0211'
                    }
                });
                console.log('cw email')
          var mailOptions = {
            from: 'wangchu0211@gmail.com',
            to: user.email,
            subject: 'Account Verification Token',
            text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + "localhost:4200" + '\/confirmation' +"?_id="+ token,

            // html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
            
})
})

router.post('/cart', (req,res) => { // a post request to the endpoint register and get the access and response
    var token = req.body // extract the user information from the request body
    var decoded = jwt.verify(req.body.token, 'secretKey');
    console.log(decoded)
    console.log(decoded.subject)
    User.findOne({_id: decoded.subject}, (error, userCart) =>{ // find the user who has the extractly same email ID as the request email ID, 
        //the second parameter (error,user) is to give a response that either give an error or the user detail to eh user that match the condition
        if(error){ // if there is an error, console.log(error)
            console.log(error)
        } else{
            // var a =  obj.userName
            console.log(userCart._id)
            if(userCart._id!= decoded.subject){
                res.status(402).send('user does not register')
            }else{ 
                console.log(userCart)
                res.status(200).send(userCart) //send token back, can use subscribe }  
        }}})})

router.post('/addCartToDatabase',  function(req,res,next){ // a post request to the endpoint register and get the access and response
    // let newData = req.body
    User.findById(req.body._id, function(err, author) {
        if (err) throw err;
        author.cart = req.body.cart;
        author.email = req.body.email;
        author.history = req.body.history;
        author.password = req.body.password;
        author.save(function(err) {
            if (err) throw err;
             
            console.log('updated successfully');
        });
    });
});

router.post('/login',(req,res)=>{//make a link to the localhost
    let userData = req.body //extract the user information from the request body
    User.findOne({email: userData.email},(error,user) =>{ // find the user who has the extractly same email ID as the request email ID, 
        //the second parameter (error,user) is to give a response that either give an error or the user detail to eh user that match the condition
        if(error){ // if there is an error, console.log(error)
            console.log(error)
        } else{// if there is no error, then check if the email and password match. Status is just to report the status as a number 
            if(!user){
                res.status(402).send('Invalid email')
            }else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password')
                } else{
                    let payload = {subject: user._id} // use user id which as part of the token
                    let token = jwt.sign(payload, 'secretKey')//use jwt to generate a token
                    let verification = user.verified
                    res.status(200).send({token, verification})} // if success, send the detial for the registered user
                   
            }
        }
    })
})

router.post('/confirmation',(req,res)=>{
    // var token = req.body;
    // console.log(token)
    var decoded = jwt.verify(req.body.token, 'secretKey');
    console.log(decoded)
    User.findOne({_id: decoded.subject}, (error, userCart) =>{ // find the user who has the extractly same email ID as the request email ID, 
        //the second parameter (error,user) is to give a response that either give an error or the user detail to eh user that match the condition
        if(error){ // if there is an error, console.log(error)
            console.log(error)
        } else{
            // var a =  obj.userName
            console.log(userCart._id)
            if(userCart._id!= decoded.subject){
                res.status(402).send('user did not register')
            }else{ 
                userCart.verified = "yes";
                userCart.save(function(err) {
                    if (err) throw err;
                     
                    console.log('updated successfully');
                res.status(200).send(userCart) //send token back, can use subscribe }  
        });
    }}})
    
})

router.get('/VerificationPage', (req,res)=>{ // a post request to the endpoint register and get the access and response
    let verificationMessage = [{
        "message1":"An verification has sent to your email, please verify",
        "message2":"Thank you so much!"
    }]
    res.json(verificationMessage)}
    )
router.get('/events',(req,res)=>{
    let events = [{
        "_id":"1",
        "name":"Monitor",
        "description":"A normal functioning ABC brand monitor",
        "date":"2020-01-23T20:44:36.511Z",
        "imageUrl":"assets/monitor.jpg",
        "amount":1
    },
    {
        "_id":"2",
        "name":"CPU",
        "description":"i3-1000U: A CPU that never exists",
        "date":"1900-05-23T14:26:43.511Z",
        "imageUrl":"./assets/i3.jpeg",
        "amount":1
    },
    {
        "_id":"3",
        "name":"GPU",
        "description":"RTX 3080 : Show the best graphic you can only imagin in 2040",
        "date":"2040-04-30T12:15:33.511Z",
        "imageUrl":"assets/GPU.jpg",
        "amount":1
    },
    {
        "_id":"4",
        "name":"Power Unit",
        "description":"a great power unit that supports 10W, can run a small fan",
        "date":"1000-23-23T18:25:43.511Z",
        "imageUrl":"assets/powerunit.png",
        "amount":1
    }

]
res.json(events)}
)

router.get('/special',(req,res)=>{
    let specialEvents = [{
        "_id":"1",
        "name":"Monitor",
        "description":"A normal functioning ABC brand monitor",
        "date":"2020-01-23T20:44:36.511Z",
        "imageUrl":"assets/monitor.jpg",
        "amount":1
    },
    {
        "_id":"2",
        "name":"CPU",
        "description":"i3-1000U: A CPU that never exists",
        "date":"1900-05-23T14:26:43.511Z",
        "imageUrl":"./assets/i3.jpeg",
        "amount":1
    },
    {
        "_id":"3",
        "name":"GPU",
        "description":"RTX 3080 : Show the best graphic you can only imagin in 2040",
        "date":"2040-04-30T12:15:33.511Z",
        "imageUrl":"assets/GPU.jpg",
        "amount":1
    },
    {
        "_id":"4",
        "name":"Power Unit",
        "description":"a great power unit that supports 10W, can run a small fan",
        "date":"1000-23-23T18:25:43.511Z",
        "imageUrl":"assets/powerunit.png",
        "amount":1
    }

]
res.json(specialEvents)})

router.get('/iteminfo_1',(req,res)=>{
    let itemInfo_1 = [{
        "_id":"1",
        "name":"Monitor",
        "description":"A normal functioning ABC brand monitor",
        "date":"2020-01-23T20:44:36.511Z",
        "imageUrl":"assets/monitor.jpg",
        "amount":1
    }]
res.json(itemInfo_1)})

router.get('/iteminfo_2',(req,res)=>{
    let itemInfo_2 =[
     {
        "_id":"2",
        "name":"CPU",
        "description":"i3-1000U: A CPU that never exists",
        "date":"1900-05-23T14:26:43.511Z",
        "imageUrl":"./assets/i3.jpeg",
        "amount":1
    }]
res.json(itemInfo_2)})

router.get('/storePage',(req,res)=>{
    let storePage =[
        {
            "_id":"2",
            "name":"CPU",
            "description":"i3-1000U: A CPU that never exists",
            "date":"1900-05-23T14:26:43.511Z",
            "imageUrl":"./assets/i3.jpeg",
            "amount":1,
            "price":"2.2"
        },{
            "_id":"2",
            "name":"CPU",
            "description":"i3-1000U: A CPU that never exists",
            "date":"1900-05-23T14:26:43.511Z",
            "imageUrl":"./assets/i3.jpeg",
            "amount":1,
            "price":"2.4"
        }]
    res.json(storePage)})

    router.get('/storeItemDetail',(req,res)=>{
        let storeItemDetail =[
            {
                "_id":"2",
                "name":"CPU",
                "description":"i3-1000U: A CPU that never exists",
                "date":"1900-05-23T14:26:43.511Z",
                "imageUrl":"./assets/i3.jpeg",
                "price":"2.2",
                "amount":1
            },{
                "_id":"2",
                "name":"CPU",
                "description":"i3-1000U: A CPU that never exists",
                "date":"1900-05-23T14:26:43.511Z",
                "imageUrl":"./assets/i3.jpeg",
                "price":"2.2",
                "amount":1
            }]
        res.json(storeItemDetail)})
module.exports = router


// this is a registration API. extract the userdata from the request object, converted into the model that mongo(database) understand, and save the user into to database