"use client";
import { MaskContainer } from "../ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="md:h-[40rem] h-[20rem] w-full flex items-center justify-center p-4 md:p-0 overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center md:text-4xl text-xl font-bold">
            Unveiling the Stories Behind the Code - Welcome to Dev Diaries! 
            Join us on a captivating journey through the world of development, where each line of code narrates a unique tale of innovation and problem-solving.
            Your backstage pass to the tech realm awaits!
          </p>
        }
        className="md:h-[40rem] h-[20rem]"
      >
        Unveiling the Stories Behind the Code - Welcome to <span className="text-red-500">Dev Diaries! </span> 
        Join us on a captivating journey through the world of development, where each line of code narrates a unique tale of innovation and problem-solving.
        Your backstage pass to the tech realm awaits!
      </MaskContainer>
    </div>
  );
}
