const express = require("express")
const bodyParser = require("body-parser")
const  cors = require('cors')


//Error: Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:3000/api/register. 
//(Reason: CORS request did not succeed) this is because the front end and the back end is running on different ports. 
//aka the front end is running on 4200 while the back end is runing on 3000. To fix that, I need to use the auth port 
//(aka PS E:\Angular Authentication\ngApp> ng g s auth) and go back to the back end server file (cd ..; cd server) 
//and run the commend nom install --save cors (install cors). then, go to the back end server.js file, 
//add const  cors = require('cors'), and app,use(cors()), then restart the back end server using node server
// now it is fixed. 
const PORT = 3000//localhost address,can be numbers
const app = express()
const api = require('./routes/api')//restore the file address



app.use(cors())
app.use(bodyParser.json())

app.use('/api', api)//add api page to server

app.get('/', function(req, res){
    res.send('Hello form server')
})
app.listen(PORT,function(){
    console.log("Server running on localhost:" + PORT)
})