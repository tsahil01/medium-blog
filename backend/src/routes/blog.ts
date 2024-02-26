import { Hono } from "hono";
import { decode, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const blog = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
  }>();

blog.use('/*', async (c, next) => {
    const header = await c.req.header("authorization") || ""; // Bearer `token`
    const token = header.split(" ")[1]; 
    try{
        const response = await verify(token, c.env.JWT_SECRET);
        c.set('userId', response.id);
        await next();
    } catch(e){
        c.status(403);
        return c.json({
            msg: "auth err"
        })
    }
})

blog.post('/', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId');
    console.log("userId: ", c.get('userId'))

    const body = await c.req.json();
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    });
    return c.json({
        id: post.id,
        msg: "on /api/v1/blog Post"
    })
})

blog.put('/update', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const postId = body.postId;
    console.log(postId);

    const update = await prisma.post.update({
        where:{
            id: postId
        },
        data:{
            title: body.title,
            content: body.content
        }
    })

    return c.json({
        update: update,
        msg: "on /api/v1/blog Put"
    })
})

blog.get('/:id', async (c)=>{
    const id = await c.req.param('id');
    const postId = id.split(':')[1]; 
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post = await prisma.post.findFirst({
        where: {
            id: postId
        }
    })
    return c.json({
        post: post,
        msg: `on /api/v1/blog${id} Get`,
    })
})

export default blog