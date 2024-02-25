import { Hono } from "hono";
import prisma from "../prismaScript";

const auth = new Hono();

auth.post('/signup', async (c)=>{
    const body = await c.req.json();
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        });
        return c.json({
            msg: "Signup done"
        })
    } catch(e){
        return c.status(403);
    }
})

auth.post('/signin',(c)=>{
    return c.json({
        msg: "on /api/v1/singin"
    })
})

export default auth