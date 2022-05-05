//importing 
let express = require('express')
const mongoose = require('mongoose')

const apiroute= require('./routes/api_routes')

const cors= require('cors')

//initialize the application
let app = express()

//setup server port
let port = 8080

//send message for your localhost
// app.get('/',(request,response) =>{
//     response.send('hello world')
// })
app.use(express.json())

app.use('/', apiroute)

app.use(cors({
    origin: '*'
}))

const url ="mongodb+srv://akhilesh:AKHILESH007@cluster0.ma5a9.mongodb.net/Kellton-Ecommerce?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true})
.then( () =>{
    console.log('Database Connected')
}).catch(err => console.log(err))

//launch the ecommerce backend app  
app.listen(port, () =>{
    console.log(`Running the port :"http://localhost:${port}/`)
})