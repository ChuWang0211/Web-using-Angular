const express = require('express')
const router = express.Router()
const User = require('../models/user')// ".." means one folder up
const mongoose = require('mongoose')
//link to my database in MongoDB with username and password
const connectionString = "mongodb+srv://AngularUser1:AngularUser1@angularsdatabase-kdtrl.azure.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(connectionString,err =>{//connect and action if error occur
    if(err){
        console.error('Error'+err)
    }else{console.log('connected to mongodb')}
})

router.get('/',(req, res) => {
    res.send('From API route')
})

router.post('/register', (req,res) => { // a post request to the endpoint register and get the access and response
    let userData = req.body // extract the user information from the request body
    let user = new User(userData)// cast the userData to Mongo model
    user.save((error, rehisteredUser)=>{ // mongo's way to save posted data
        if(error){ // if error, the log to the console
            console.log(error)
        }else {res.status(200).send(resgisteredUser)} // if success, send the detial for the registered user
    }) // 
})
module.exports = router

// this is a registration API. extract the userdata from the request object, converted into the model that mongo(database) understand, and save the user into to database