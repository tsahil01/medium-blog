import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { signUpParams } from "@tsahil/common-zod-validation";

export function Auth({authType} : {type: "signup" | "signin"}){
    const [postInputs, setPostInputs] = useState<signUpParams>({
        name: "",
        email: "",
        password: ""
    })
    console.log(postInputs);
    return <>
        <div className=" h-screen flex flex-col justify-center">
            <div className="flex justify-center">
            <div className="flex flex-col justify-center text-center px-9 ">
                    <div className="text-3xl font-extrabold">Create an account</div>
                    <div className="flex flex-row gap-1 text-slate-500">
                        <div className="">Already have an account? </div>
                        <Link className="underline" to={"/signin"}>Login</Link>
                    </div>
                    <div className="mt-5">
                    <LableInputs lable="Name" placeholder="Enter your Name: " type="text" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                            
                        })
                    }} />
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