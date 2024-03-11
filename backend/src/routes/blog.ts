import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt';

const app = new Hono<{
    Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
      name:string,
      date:Date
    }
  }>();

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId: string
  }
}>();
/*
blogRouter.use('/*', async (c,next)=>{
  console.log("Inside the middleware");
  //extract the user id and pass it down to the route handler
  const authHeader = c.req.header("authorization")||""; // making it a string or empty string so that
  //no type error get 

  try{
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "You are no logged in",
      });
    }
    next();  

  } catch (e){
    c.status(403);
    return c.json({
      message: "You are no logged in",
    });
  }

  
})
*/


  
blogRouter.post('/',async (c)=>{
    const body = await c.req.json();
    //const userId = c.get("userId");
    const username = body.username;

    console.log("Inside the post of blog");

    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const user = await prisma.user.findFirst({
      where:{
        email: username
      }
    })

    if(user){
      const post = await prisma.post.create({
        data: {
          title: body.title,
          content: body.content,
          authorId: user?.id,
          date: new Date(),
        },
      });
      return c.json({
        id: post.id,
      });
    } else {
      console.log("User not found");
      return ;
    }
    
  })
blogRouter.put('/',async (c)=>{
    const body = await c.req.json();

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.post.update({
      where: {
        id: body.id
      } ,
      data: {
        title: body.title,
        content: body.content
      }
    })

    return c.json({
      id: blog.id
    })


})
interface blogRelationType {
     name:string | null,
     blogid: String,
     blogContent: string,
     blogTitle: string,
     publishedDate: string
}


//pagination - only return inital 5-10 depending on the range
//adding dates to blogs
blogRouter.get('/bulk',async (c)=>{
   const prisma = new PrismaClient({
     datasourceUrl: c.env.DATABASE_URL,
   }).$extends(withAccelerate());

   const blogs = await prisma.post.findMany();
   
   let blogRelation: blogRelationType[]=[];
    
   for(let i = 0; i<blogs.length;i++){
    const userDetails = await prisma.user.findFirst({
      where:{
        id:blogs[i].authorId
      }
    })
    if(userDetails){
      blogRelation.push({
        name: userDetails.name,
        blogid: blogs[i].id,
        blogContent: blogs[i].content,
        blogTitle: blogs[i].title,
        publishedDate: blogs[i].date.getDate().toString()+"/"+blogs[i].date.getMonth().toString()+"/"+blogs[i].date.getFullYear().toString()
      });
    }
   }

   for(let i = 0;i<blogRelation.length;i++){
    console.log("My output is working ")
    console.log(blogRelation[i]);
   }

   return c.json({
    blogRelation
   })
  
})

blogRouter.get('/:id',async (c) => {
  const id =  c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try{
    const post = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });

    return c.json({
      post,
    });
  } catch(e) {
    c.status(411);
    console.log(e);
    return c.json({
      message: "ERROR WHILE FETCHING BLOG POST"
    })
  }
})



  