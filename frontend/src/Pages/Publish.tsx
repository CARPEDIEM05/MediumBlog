import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { author } from "../Store/Atoms";
import axios from "axios";

export function Publish(){
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const user = useRecoilValue(author);

    async function postBlog(){
        console.log(user);
        /**
         * title: body.title,
          content: body.content,
          authorId: user?.id,
          date: new Date(),
         */

        const response = await axios.post("http://localhost:8787/api/v1/blog",{
            title: title,
            content: content,
            author: user
        });
        if(response.data){
            navigate('/blogs');
        }

    }
    return <div className="w-full font-serif">
       <div onClick={postBlog} className="flex justify-end mx-4 mt-4">
                <button type="button" 
                className="mr-4 text-white
                 bg-green-500 hover:bg-green-800 
                 focus:outline-none focus:ring-4 
                 focus:ring-green-300 font-medium 
                 rounded-xl text-sm px-5 py-1.5 
                 text-center me-2 mb-1">Publish</button>
            </div>
        <div>
            <div>
                <input onChange={(e)=>{
                    setTitle(e.target.value);
                }} className=" outline-none mx-4 m w-full h-14 text-2xl font-semibold" type="text" placeholder="Enter the title" />
            </div>
            <div className="h-screen flex flex-col mx-2">
      {/* Mimic input styling here. Adjust the classes as needed. */}
      <label className="flex-1 relative  rounded-lg">
        {/* Invisible placeholder that only shows when the textarea has no value */}
        {!content && (
          <span className="absolute top-0 left-0 p-2.5 text-slate-400 pointer-events-none">
            Content
          </span>
        )}
        <textarea
          className="w-full h-full p-2.5 resize-none border-none rounded-lg focus:ring-0 focus:outline-none"
          placeholder=""
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ minHeight: '-webkit-fill-available' }} // Ensures full height in mobile browsers
        ></textarea>
      </label>
    </div>
            
        </div>
       
        
        
    </div>
}