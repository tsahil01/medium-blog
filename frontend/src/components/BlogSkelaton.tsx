function Skelaton(){
    return <>
    <div role="status" className="w-screen/2 animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
    </div>


    </>
}

export function BlogSkelaton(){

    
    return<>
        <div className="flex justify-center">
            <div className="flex flex-col gap-6 w-full max-w-4xl">
                <Skelaton/>
                <Skelaton/>
                <Skelaton/>
                <Skelaton/>
                <Skelaton/>
            </div>
        </div>
    </>
}