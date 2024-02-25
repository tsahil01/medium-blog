import { Hono } from "hono";
import { decode, verify } from 'hono/jwt'

const blog = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    }
  }>();

blog.use('/*', async (c, next) => {
    const header = await c.req.header("authorization") || ""; // Bearer `token`
    const token = header.split(" ")[1]; 
    try{
        const response = await verify(token, c.env.JWT_SECRET);
        await next();
    } catch(e){
        c.status(403);
        return c.json({
            msg: "auth err"
        })
    }
})

blog.post('/', (c)=>{
    return c.json({
        msg: "on /api/v1/blog Post"
    })
})

blog.put('/', (c)=>{
    return c.json({
        msg: "on /api/v1/blog Put"
    })
})

blog.get('/:id', (c)=>{
    const id = c.req.param('id');
    return c.json({
        msg: `on /api/v1/blog${id} Get`
    })
})

export default blog