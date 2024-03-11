import axios from "axios";
import { useEffect, useState } from "react"
/*
"name": "sudhanshu ",
            "blogid": "38ca906f-65a4-4a23-b386-a906429d4086",
            "blogContent": "this is my new blog",
            "blogTitle": "my new blog"
        }
*/

interface blogTypes {
    name:string,
    blogId: string,
    blogContent: string,
    blogTitle:string

}

export function Content(){
    const [blogs,setBlogs] = useState([]);
    
    async function getBlogs(){
        console.log("Inside get blogs");
        const response  = await axios.get("http://localhost:8787/api/v1/blog/bulk");
        console.log(response) 
    }
    
   
    return <div>
        
        
        
    </div>
}