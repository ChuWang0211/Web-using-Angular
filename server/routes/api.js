const express = require('express')
const router = express.Router()
const User = require('../models/user')// ".." means one folder up
const mongoose = require('mongoose')

//link to my database in MongoDB with username and password
const connectionString = "mongodb+srv://AngularUser1:AngularUser1@angularsdatabase-kdtrl.azure.mongodb.net/AngularsDatabase?retryWrites=true&w=majority" //6
mongoose.connect(connectionString, { useNewUrlParser:true,useUnifiedTopology: true },err =>{//connect and action if error occur
    if(err){
        console.error('Error'+err)
    }else{console.log('connected to mongodb')}
})

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
        }else {res.status(200).send(registeredUser)} // if success, send the detial for the registered user
    }) // 
})

//a login api
router.post('/login',(req,res)=>{//make a link to the localhost
    let userData = req.body //extract the user information from the request body
    User.findOne({email: userData.email},(error,user) =>{ // find the user who has the extractly same email ID as the request email ID, 
        //the second parameter (error,user) is to give a response that either give an error or the user detail to eh user that match the condition
        if(error){ // if there is an error, console.log(error)
            console.log(error)
        } else{// if there is no error, then check if the email and password match. Status is just to report the status as a number 
            if(!user){
                res.status(401).send('Invalid email')
            }else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password')
                } else{res.status(200).send(user)}
            }
        }
    })
})

router.post('/stripePayment',(req,res)=>{//make a link to the localhost
    let userData = req.body //extract the user information from the request body
    User.findOne({email: userData.email},(error,user) =>{ // find the user who has the extractly same email ID as the request email ID, 
        //the second parameter (error,user) is to give a response that either give an error or the user detail to eh user that match the condition
        if(error){ // if there is an error, console.log(error)
            console.log(error)
        } else{// if there is no error, then check if the email and password match. Status is just to report the status as a number 
            if(!user){
                res.status(401).send('Invalid email')
            }else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password')
                } else{
                    let payload = {subject: user._id} // use user id which as part of the token
                    let token = jwt.sign(payload, 'secretKey')//use jwt to generate a token
                    res.status(200).send({token})} // if success, send the detial for the registered user
                   
            }
        }
    })
})

router.get('/events',(req,res)=>{
    let events = [{
        "_id":"1",
        "name":"auto expo",
        "description":"lorem ipsum",
        "date":"2012-04-23T18:25:43.511Z"
    },
    {
        "_id":"2",
        "name":"auto expo",
        "description":"lorem ipsum",
        "date":"2012-04-23T18:25:43.511Z"
    },
    {
        "_id":"3",
        "name":"auto expo",
        "description":"lorem ipsum",
        "date":"2012-04-23T18:25:43.511Z"
    },
    {
        "_id":"4",
        "name":"auto expo",
        "description":"lorem ipsum",
        "date":"2012-04-23T18:25:43.511Z"
    }

]
res.json(events)}
)

router.get('/special',(req,res)=>{
    let events = [{
        "_id":"1",
        "name":"auto expo",
        "description":"lorem ipsum",
        "date":"2012-04-23T18:25:43.511Z"
    },
    {
        "_id":"2",
        "name":"auto expo",
        "description":"lorem ipsum",
        "date":"2012-04-23T18:25:43.511Z"
    },
    {
        "_id":"3",
        "name":"auto expo",
        "description":"lorem ipsum",
        "date":"2012-04-23T18:25:43.511Z"
    },
    {
        "_id":"4",
        "name":"auto expo",
        "description":"lorem ipsum",
        "date":"2012-04-23T18:25:43.511Z"
    }

]
res.json(events)})

module.exports = router


// this is a registration API. extract the userdata from the request object, converted into the model that mongo(database) understand, and save the user into to database