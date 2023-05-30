const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3030
dotenv.config()
app.use(cors())
app.use(bodyParser.json())

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    imageUrl: String
})
const UserModel = mongoose.model('Users',UserSchema)

DB_CONNECTION= process.env.DB_CONNECTION
DB_PASSWORD=process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD))
.then(()=> console.log("MongoDb connected"))

app.get('/users', async(req, res) => {
  const users = await UserModel.find()
  res.status(200).send(users)
})
app.get('/users/:id', async(req, res) => {
    const id = req.params.id
    const user = await UserModel.findById(id)
    res.status(200).send(user)
  })

  app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
  const deleteUser = await UserModel.findByIdAndDelete(id);
 
    res.status(200).send("Deleted Succesfully");
  })

  app.post('/users', async (req, res) => {
  const newUser = new UserModel({ 
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    age: req.body.age

  });
  await newUser.save();
  res.status(201).send("created");
  })



app.put("/users/:id", async(req, res) => {
  const id = req.params.id;
  const existedUser = await UserModel.findByIdAndUpdate(id,{
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    age: req.body.age
  });
    res.status(200).send(`updated succesfully`)
})
  



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})