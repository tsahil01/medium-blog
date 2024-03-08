interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedAt: string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedAt
}: BlogCardProps) => {
    return <>
        <div className="flex px-3 py-2 flex-col gap-1 bg-slate-100">
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
    </>
}


function Avatar({name}: {name: string}){
    return <>    
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-auto text-gray-600 dark:text-gray-300">{`${name[0]}${name.split(" ")[1][0]}`}</span>
    </div>

    </>
}