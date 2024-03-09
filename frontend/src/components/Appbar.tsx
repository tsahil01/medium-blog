import { Avatar } from "./Avatar";

export function AppBar({name}:{name: string}){
    return <>
        <div className="flex flex-row p-3 px-5 justify-between bg-slate-300 mb-4">
            <div className="text-2xl font-bold my-auto">Medium Blog</div>
            <Avatar name={name} size={10}/>
        </div>
    </>
}