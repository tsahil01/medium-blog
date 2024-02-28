import { BentoGridDemo } from "./aceternity/Grid";

export default function Blogs(){
    return<>
     <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col p-5">
            <h1 className="py-4 md:text-5xl text-3xl lg:text-7xl font-bold text-center text-black dark:text-white relative">Blogs</h1>
            <div className="z-20">
                <BentoGridDemo/>
            </div>
        </div>
    </div>
    </>
}
