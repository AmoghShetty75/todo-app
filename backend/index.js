const express = require("express");
const { createtodo, updateTodo } = require("./types");
const PORT = 3000;
const app = express()
app.use(express.json())

app.post('/todo',(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createtodo.safeParse(createPayload)

    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs"
        })
    }else{

    }
})

app.get('/todo',(req,res)=>{

})

app.put('/completed',(req,res)=>{
        const updatePayload = req.body;
        const parsePayload = updateTodo.safeParse(updatePayload)

        if(!parsePayload.success){
            res.status(411).json({
                msg:"you sent wrong inputs"
            })  
        }
})


app.listen(PORT,(req,res)=>{
    console.log(`server started at ${PORT}`);
})