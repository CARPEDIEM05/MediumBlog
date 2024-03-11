import { Hono, } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors';



export const router = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>();

router.use('/*',cors());

router.route("/api/v1/user", userRouter);
router.route("/api/v1/blog",blogRouter);

// c-> context, same as request,response




export default router
