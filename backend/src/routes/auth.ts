import { Hono } from "hono";

const auth = new Hono();

auth.post('/signup',(c)=>{
    return c.json({
        msg: "on /api/v1/singup"
    })
})

auth.post('/signin',(c)=>{
    return c.json({
        msg: "on /api/v1/singin"
    })
})

export default auth