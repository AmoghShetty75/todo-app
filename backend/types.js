const zod = require("zod")

const createtodo =zod.object({
    title: zod.string(),
    desc: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})


module.exports={
    createtodo,
    updateTodo
}