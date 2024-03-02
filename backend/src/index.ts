import { Hono } from 'hono'
import { cors } from 'hono/cors'
import router from './routes'

const app = new Hono()
app.use(cors());

app.get('/', (c) => {
  return c.text('Hono Backend for Medium-Blog Project!!');
})

app.route('/api/v1', router);

export default app
