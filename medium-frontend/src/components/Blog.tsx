import { useEffect, useState } from "react"
import  ReactMarkdown  from "react-markdown";

const blog = {
    content: `# Hello`
}

export default function Blog(){
    const [value, setValue] = useState("")

    useEffect(()=>{
        async function getMD() {
            const req = await fetch('');
            const data = await req.json()
            setValue(data.md);
        }
        
        getMD();
    },[])

    return <>
    <div className="flex flex-row p-6 justify-around">
        <div className="flex flex-col border-2">
            <h1>Text box</h1>
            <textarea name="example" id="" cols={70} rows={30} onChange={(e)=> setValue(e.target.value)}/>
        </div>
        <div className="flex flex-col">
            <ReactMarkdown className="prose">{value}</ReactMarkdown>
        </div>
    </div>
    </>
}

