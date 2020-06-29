const express = require('express')
const router = express.Router()

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

module.exports = router