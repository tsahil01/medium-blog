
import Markdown from 'react-markdown'


const blog = {
    content: `# Hello`
}

export default function Blog(){
    return <>
    <div className=" text-white bg-black">
        <Markdown className="prose lg:prose-xl text-white">{blog.content}</Markdown>
    </div>
    </>
}

