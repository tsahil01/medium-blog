"use client";
import { WavyBackground } from "../ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 px-4">
      <p className="text-3xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Welcome to my Blog
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
  );
}
