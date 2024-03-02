import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { signUpParams } from "@tsahil/common-zod-validation";
import { BACKEND_URL } from "../config";

export function Auth({ authType }: { authType: "signup" | "signin" }) {

    async function dataFetch() {
        if(authType === "signup"){
            try{
                const res = await fetch(`${BACKEND_URL}/signup`, {
                    method: "POST",
                    body: JSON.stringify(postInputs),
                    headers: {
                        'Content-type': 'application/json',
                    }
                });
                const data = await res.json();
                console.log(data);
                return data;
            } catch (error) {
                console.error(error);
            }
        }
    }

    const [postInputs, setPostInputs] = useState<signUpParams>({
        name: "",
        email: "",
        password: ""
    })
    console.log(postInputs);
    return <>
        <div className=" h-screen flex flex-col justify-center">
            <div className="flex justify-center">
            <div className="flex flex-col justify-center text-center px-9 md:w-3/4">
                    <div className="text-3xl font-extrabold">{authType === 'signin'? "Login Now": "Create an account"}</div>
                    <div className="flex flex-row gap-1 justify-center text-slate-500">
                        <div className=""> {authType === "signup"? "Already have an account?" : "Create a new account" } </div>
                        <Link className="underline" to={authType === "signup" ? "/signin" : "/signup"}>{authType === "signup" ? "Login" : "Signup"}</Link>
                    </div>
                    <div className="my-5">
                        { 
                        authType === "signup" ?

                            <LableInputs lable="Name" placeholder="Enter your Name: " type="text" onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value
                                    
                                })
                            }} /> : ""
                        }
                    <LableInputs lable="Email" placeholder="example@example.com " type="text" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                            
                        })
                    }} />
                    <LableInputs lable="Passoword" placeholder="" type="password" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                            
                        })
                    }} />
                    </div>
                    <button type="button" className="text-white w-full font-bold bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={()=>{
                        dataFetch()
                    }}>{authType === "signup"? "Signup" : "Signin"}</button>
                </div>
            </div>
        </div>
    </>
}

interface LabelInputsInterface {
    lable: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


function LableInputs({lable, placeholder, type, onChange}:LabelInputsInterface){

    return <>
        <div className="flex flex-col justify-start mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-900 text-left">{lable}:</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder}
            onChange={(e)=> onChange(e)} 
            type={type}
            required />
        </div>
    </>
}

function datafetch() {
    throw new Error("Function not implemented.");
}
