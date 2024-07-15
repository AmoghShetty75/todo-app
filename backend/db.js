const mongoose = require("mongoose")


mongoose.connect('mongodb+srv://amoghc174:wjkAQKKwHUQTgDbY@cluster0.lcozspr.mongodb.net/todos')

const todoSchema = mongoose.Schema({
    title:string,
    desc:string,
    completed:boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports={
    todo
}