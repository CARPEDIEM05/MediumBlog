import { useNavigate } from "react-router-dom"

export function BlogsNavBar(){
    const navigate = useNavigate();
    return <div >
        <div className="flex space-x-4 grid grid-cols-2">
            <div className="flex space-x-4 justify-items-start">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
         className=" stroke-1 hover:stroke-2 cursor-pointer w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
            </div>
          

            <div >
                For you
            </div>
 
            <div>
                Following
            </div>
            </div>
        
            <div className="flex justify-end">
                <button type="button" 
                className="mr-4 text-white
                 bg-green-500 hover:bg-green-800 
                 focus:outline-none focus:ring-4 
                 focus:ring-green-300 font-medium 
                 rounded-xl text-sm px-5 py-1.5 
                 text-center me-2 mb-1" onClick={()=>{
                    navigate('/publish')
                 }}>Publish</button>
            </div>
    </div>
    <div className="h-px my-8 bg-gray-200 border-0 mr-4">
    </div>
    </div>
}