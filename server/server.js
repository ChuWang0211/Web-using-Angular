const express = require("express")
const bodyParser = require("body-parser")

const PORT = 3000//localhost address,can be numbers
const app = express()
const api = require('./routes/api')//restore the file address

app.use(bodyParser.json())

app.use('/api', api)//add api page to server

app.get('/', function(req, res){
    res.send('Hello form server')
})
app.listen(PORT,function(){
    console.log("Server running on localhost:" + PORT)
})