const express = require('express')
cors = require('cors')
app = express()
mongoose = require('./server/db/db')
login = require('./server/models/login')
signup = require('./server/models/signup')

port = process.env.PORT || 3001
app.use(express.static(__dirname + '../public'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(port)
console.log("up and running")

app.get('/',(req, res)=>{
    signup.find({})
    .then(surname => res.json(surname))
    .catch((e)=>{
        res.status(500).send(e)
    })
})

app.post('/add',(req, res)=>{
 const user = new signup(req.body)
 user.save().then((user)=>{
     res.json({
         message: "Successfully saved",
         data: user
     })
 }).catch((e)=>{
     res.status(500).send(e)
 })
})

app.post('/users',(req, res)=>{
    const users = req.body
    console.log(users)
    signup.find(users)
    .then(user => res.json(user))
    .catch((e)=>{
        res.send(e)
    })
})
