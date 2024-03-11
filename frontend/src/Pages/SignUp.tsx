import { Quote } from "../Components/Quote";
import { Auth } from "../Components/Auth";


export function SignUp(){
    
    return <div className=" grid grid-cols-1 lg:grid-cols-2 flex justify-center items-center font-serif ">
        <div >
        <Auth type="signup" />
        </div>
        
        <div className=" invisible lg:visible">
        <Quote  />
        </div>
        
    </div>
}