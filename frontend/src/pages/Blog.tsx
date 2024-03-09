import { useParams } from "react-router-dom";
import { AppBar } from "../components/Appbar";
import { useBlog } from "../hooks";
import { Avatar } from "../components/Avatar";
import { BlogSkelaton } from "../components/BlogSkelaton";

export function Blog(){
    const id = useParams().id;
    console.log(id);
    const {loading, blog} = useBlog(`${id}`);
    if (loading){
        return <>
        <AppBar name="Sahil Tiwaskar"/>
        <BlogSkelaton/>
        </>
    }

    return <>
    <AppBar name="Sahil Tiwaskar"/>
    <div className="flex md:flex-row flex-col w-screen md:p-6 p-3 gap-5">
        <div className="md:w-2/3 w-full">
            <div className="md:text-5xl text-3xl font-extrabold">{blog.title}</div>
            <div className="font-light text-sm mt-2">Posted on Data</div>
            <div className="mt-5">{blog.content}</div>
        </div>
        <div className="md:w-1/3 w-screen">
            <div className="mb-5 font-bold">Author</div>
            <div className="flex flex-row px-5 gap-3">
                <Avatar name={blog.author.name}/>
                <div className="text-xl font-bold">{blog.author.name}</div>
            </div>
            <div className="font-light text-sm mt-2 px-5">A coder how loves to code all day sitting on chair and just banging his keyboard all day long.</div>
        </div>
    </div>
    </>
}