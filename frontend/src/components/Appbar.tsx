import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";

export function AppBar({name}:{name: string}){
    const navigate = useNavigate();
    return <>
        <div className="flex flex-row p-3 md:px-5 justify-between w-screen overflow-hidden bg-slate-300 mb-4">
            <Link to="/blogs">
                <div className="sm:text-2xl text-xl font-bold my-auto cursor-pointer">Medium Blog</div>
            </Link>
            <div className="flex gap-4">
                <button className="text-sm text-white bg-green-700 p-1 px-5 rounded-lg" onClick={()=>{
                    navigate("/create-blog");
                }}>Publish</button>
                <Avatar name={name} size={10}/>
            </div>
        </div>
    </>
}