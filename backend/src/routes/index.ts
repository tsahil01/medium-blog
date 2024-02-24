import { Hono } from "hono";
import blog from "./blog";
import auth from "./auth";

const router = new Hono()
router.get('/', (c)=>{
    return c.json({
        msg: "on /api/v1/"
    })
})

router.route('/blog', blog)
router.route('/', auth);

export default router