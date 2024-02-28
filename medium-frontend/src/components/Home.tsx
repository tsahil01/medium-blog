import { HeroScrollDemo } from "./aceternity/ContainerScroll";
import { SVGMaskEffectDemo } from "./aceternity/SvgMaskEff";
import { TypewriterEffectSmoothDemo } from "./aceternity/Typewriter";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Home(){
    return <>
    <div className="flex flex-col">
        <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,white)]"></div>
            <HeroScrollDemo/>
        </div>
        <SVGMaskEffectDemo/>
        <div className="md:h- h-[40rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            </div>
            <div className="">
                <TypewriterEffectSmoothDemo/>
            </div>  
        </div>
    </div>
    </>
}


const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

<div className="flex md:flex-row flex-col justify-between p-4">
<div className="px-3 z-40">
    <TextGenerateEffectDemo/>
</div>
<div className="px-3 z-40">
    <TextGenerateEffectDemo/>
</div>
</div>