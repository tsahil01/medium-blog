import { Hono } from "hono";

const blog = new Hono<{
    Bindings: {
      DATABASE_URL: string
    }
  }>();

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