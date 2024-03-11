import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import { signupInput } from "@carpediem55/medium-common";


export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string 
      JWT_SECRET: string
    }
  }>();
  

  userRouter.post('/signup',async (c)=>{
    console.log("Entered singup");

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    //zod, hashed the password
    const body = await c.req.json();
    
    try{
        const user = await prisma.user.create({
            data: {
              email: body.username,
              password: body.password,
              name: body.name
            }
          })
        const token = await sign({id: user.id}, c.env.JWT_SECRET)

        return c.json({
        jwt: token
     })

    } catch(e){
      console.log(e);
        c.status(411);
        return c.text('Invalid');
    }
  })
  userRouter.post('/signin',async (c)=>{
    console.log("Inside the sign in Route");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    try{
      const user = await prisma.user.findFirst({
        where: {
          email: body.username,
          password:body.password
        }
      })
      console.log(user);

      if(!user){
        c.status(403); //unauthorized status code 
        return c.json({
          message: "Incorrect credentials"
        })
      }

      const jwt = await sign({
        id: user.id

      }, c.env.JWT_SECRET);
      return c.text(jwt);
      
    } catch (e) {
      console.log(e);
      c.status(411);
      return c.text('Invalid');
    }
  })