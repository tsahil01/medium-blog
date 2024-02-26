import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput } from "@tsahil/common-zod-validation";


const auth = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    }
  }>();

auth.post('/signup', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } =  signinInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            error: "incorrect inputs"
        })
    }
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        });
        if(user){
            const token = await sign({ id: user.id }, c.env.JWT_SECRET);
            return c.json({
                msg: "Signup done",
                token: token
            })
        }
    } catch(e){
        return c.status(403);
    }
})

auth.post('/signin', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const { success } =  signinInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            error: "incorrect inputs"
        })
    }
    try {
        const user = await prisma.user.findFirst({
            where:{
                email: body.email,
                password: body.password
            }
        });
        if(user){
            const token = await sign({ id: user.id }, c.env.JWT_SECRET);
            return c.json({
                msg: "Signin done",
                token: token
            })
        } else{
            return c.json({
                msg: "user not exist"
            })
        }
    } catch(e){
        return c.status(403);
    }
})

export default auth