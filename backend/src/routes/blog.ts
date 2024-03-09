import { Hono } from "hono";
import { decode, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createPostInput, updatePostInput } from "@tsahil/common-zod-validation"; 

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
        console.log("response: ", response);
        console.log("userId: ", c.get('userId'));
        await next();
    } catch(e){
        c.status(403);
        return c.json({
            msg: "auth err"
        })
    }
})

blog.post('/', async (c)=>{
    console.log("on /api/v1/blog Post Called");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId');
    console.log("userId: ", c.get('userId'))

    const body = await c.req.json();
    console.log("body: ", body);

    const { success } = createPostInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            error: "incorrect inputs"
        })
    }
    try{
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
    } catch(e){
        c.status(500);
        return c.json({
            msg: e
        })
    }
})

blog.put('/', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const postId = body.postId;

    const { success } = updatePostInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            error: "incorrect inputs"
        })
    }

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

blog.get('/bulk', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });
    console.log("post: ", posts);
    return c.json({
        posts: posts,
        msg: "on /api/v1/blog/bulk GET",
    })
})

blog.get('/:id', async (c)=>{
    const postId = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post = await prisma.post.findFirst({
        where: {
            id: postId
        },
        select: {
            id: true,
            title: true,
            content: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })
    return c.json({
        post: post,
        msg: `on /api/v1/blog/${postId} GET`,
    })
})



export default blog