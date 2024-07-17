const mongoose = require("mongoose")
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const todoSchema = mongoose.Schema({
    title:String,
    desc:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports={
    todo
}