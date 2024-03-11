import { ChangeEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SignupInput } from "@carpediem55/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRecoilState } from "recoil";
import { author } from "../Store/Atoms";




export function Auth({type}:{type: "signup" | "signin"}){
    const [postInputs, setPostInpts] = useState<SignupInput>({
        name:"",
        username:"",
        password:""
    });

    const [user,setUser] = useRecoilState(author);

    async function sendRequest(){
        try{ 
            console.log("Inside send request");
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postInputs)
            console.log(response);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            setUser(postInputs.username);
            console.log(user);
            navigate("/blogs");

        } catch (e){
            alert("Wrong inputs");
        }
    }


    const navigate = useNavigate();
    return <div className="flex justify-center items-center h-screen">
        <div>
            <div className=" justify-center items-center mb-4">
                <div className="flex text-3xl font-bold justify-center items-center">Create an account</div>
                <div className="flex text-slate-400 justify-center items-center">

                    {type === "signin" ? "Don't have an account? ": "Already have an account? "} <button 
                    className="ml-1"
                    
                    onClick={()=>{
                        if(type=== "signin")
                        {
                            navigate('/signup')
                        } else {
                            navigate('/signin')
                        }
                    
                }}>{type === "signin" ? "Sign up":" Login"}</button></div>
                
            </div>
            
            {type === "signup" ?<LabeledInputs label="Name" placeholder="Enter your name" onChange={(e)=>{
                setPostInpts({
                    ...postInputs,
                    name:e.target.value
                })

            }}/> :null}
            <LabeledInputs label="Email" placeholder="m@example.com" onChange={(e)=>{
                setPostInpts({
                    ...postInputs,
                    username:e.target.value
                })

            }}/>
            <LabeledInputs label="Password" type="password"  placeholder="Password" onChange={(e)=>{
                setPostInpts({
                    ...postInputs,
                    password:e.target.value
                })

            }}/>
             
    <div className="flex justify-center items-center ">
    <button className="box-border bg-stone-950 text-slate-50 pr-28 pl-28 rounded pt-1 pb-1"
     onClick={sendRequest}>{type === "signup"? "Sign up": "Sign in"}</button>
</div>
        </div>
    </div>
}

interface LabeledInputTypes {
    label : string,
    placeholder: string,
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
    type?: string
}

function LabeledInputs({label,placeholder,onChange,type}: LabeledInputTypes){
    return <div className="mb-4">
    <div className=" font-semibold">{label}</div>
    <input  className="box-border border  border-slate-400 text-start text-sm w-72 h-8 pl-2 rounded" 
    type={type||"text"} onChange={onChange}
    placeholder={placeholder} />
</div>

}

