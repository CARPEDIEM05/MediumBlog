import { Auth } from "../Components/Auth";
import { Quote } from "../Components/Quote";


export function SignIn(){
    return <div className="flex justify-center items-center font-serif grid grid-cols-1 lg:grid-cols-2 ">
        <div >
        <Auth type="signin" />
        </div>
        <div className=" invisible lg:visible">
        <Quote  />
        </div>
        
    </div>
}