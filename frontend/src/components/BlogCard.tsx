import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedAt: number | string;
    id:  number | string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedAt = "random date",
    id,
}: BlogCardProps) => {
    return <>
    <Link to={`/blog/${id}`}>
        <div className="flex px-3 py-2 flex-col gap-1 bg-slate-100 cursor-pointer">
            <div className="pb-1 flex gap-1">
                <Avatar name={authorName} />
                <div className="my-auto font-bold text-sm">
                    {authorName},
                </div>
                <div className="my-auto font-light text-sm">
                    {publishedAt}
                </div>
            </div>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div>
                {content.slice(0, 100) + "..."}
            </div>
            <div className="font-light text-sm flex justify-right">
                {Math.floor(content.length / 100) + " min read"}
            </div>
            <hr/>
        </div>
    </Link>
    </>
}
