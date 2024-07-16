const express = require("express");
const { createtodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require('cors')
const PORT = 3000;
const app = express()
app.use(express.json())
app.use(cors())

app.post('/todo', async(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createtodo.safeParse(createPayload)

    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs"
        })
        return;
    }
     await todo.create({
        title:createPayload.title,
        desc:createPayload.desc,
        completed:false
    })
    res.json({
        msg:"Todo created successfully"
    })
})

app.get('/todo',async(req,res)=>{
    const todos = await todo.find({})
    res.json({
        todos
    })

})

app.put('/completed',async(req,res)=>{
        const updatePayload = req.body;
        const parsePayload = updateTodo.safeParse(updatePayload)
        if(!parsePayload.success){
            res.status(411).json({
                msg:"you sent wrong inputs"
            })  
            return;
        }
        await todo.update({
            _id:req.body.id
        },
         {
            completed:true
         })
         res.json({
            msg:"Todo marked has completed"
         })
})


app.listen(PORT,(req,res)=>{
    console.log(`server started at ${PORT}`);
})