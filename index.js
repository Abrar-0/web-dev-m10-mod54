const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

const user = [
    {id:1, name:'sava',email:'sabana@gmail.com'},
    {id:2, name:'sabaa',email:'saba@gmail.com'},
    {id:3, name:'sa',email:'sa@gmail.com'}
]

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('server running')
})

app.get('/users', (req,res)=>{
    res.send(user)
})

app.post('/users', (req,res) =>{
    console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body
    newUser.id = user.length + 1 
    user.push(newUser)
    res.send(newUser)

})

app.listen(port)
