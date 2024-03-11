import { useEffect, useState } from "react";
import { BlogCard } from "../Components/BlogsCard";
import { BlogsNavBar } from "../Components/BlogsNavBar";
import { Content } from "../Components/Content";
import axios from "axios";

interface PostType {
    name:string 
    blogid: String,
    blogContent: string,
    blogTitle: string,
    publishedDate: string
}

export function Blogs(){
    const [posts,setPosts] = useState<PostType[]>([]);
    useEffect(()=>{
        async function getBlogs(){
            const response = await axios.get("http://localhost:8787/api/v1/blog/bulk");
            if(Array.isArray(response.data.blogRelation)){
                setPosts(response.data.blogRelation);
            } else {
                console.log("Response data is not array");
            }
        }
        getBlogs();
        

    },[])
        
     /*
        name: userDetails.name,
        blogid: blogs[i].id,
        blogContent: blogs[i].content,
        blogTitle: blogs[i].title,
        blogDate: blogs[i].date
    */
   /*
   authorName,
    publishDate, 
    content, 
    title
    */

    
    
    return <div className="flex justify-center h-full font-serif">
        <div className="justify-center my-8 shadow-2xl h-full w-full mx-10">
            <div className=" my-8 ml-6">
                <BlogsNavBar />
                <BlogsRender blgosssss={posts} />

            </div>
            <div>
            
                
            </div>
        </div>
    </div>
}
interface BlogsArray {
    blgosssss: PostType[]
}

function BlogsRender({blgosssss}:BlogsArray){
    let cnt = 0;
    return <div className=" mt-16">
            {blgosssss.map(post => (
                        <BlogCard key={cnt++} authorName={post.name}  publishDate={post.publishedDate} title={post.blogTitle}
                        content={post.blogContent}/>
            ))}
    </div>


}