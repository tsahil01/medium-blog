import { useState } from "react";
import { AppBar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function Publish(){
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function handlePublish(){
        const res = await fetch(`${BACKEND_URL}/blog`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
        const data = await res.json();
        console.log(data);
        if(data.id){
            alert("Blog Published Successfully");
            setTitle("");
            setContent("");
            navigate(`/blog/${data.id}`);
        } else{
            alert("Error in publishing blog");
        }
    }

    return <>
    <AppBar name="Sahil Tiwaskar"/>
    <div className="flex flex-col md:p-5 p-3 gap-5">
        <div className="">
            <input type="text" placeholder="Enter Blog Title" className="text-4xl font-bold p-4 w-full rounded-md outline-none" onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="">
            <textarea name="" id="" rows={15} className="w-full p-4 text-xl h-screen/2 outline-none h-auto" placeholder="Enter content" onChange={(e)=>setContent(e.target.value)}/>
        </div>
        <div className="flex justify-center">
            <button className="bg-green-500 rounded-lg text-xl p-2" onClick={()=> handlePublish()}>Publish</button>
        </div>
    </div>
    </>
}
