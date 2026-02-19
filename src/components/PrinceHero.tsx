"use client";

import { BackgroundBeams } from "./ui/background-beams";

export function PrinceHero() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-250 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-2xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Prince Mohammed Bin Abdulrahman Bin Nasser AlSaud
        </h1>
        <p></p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
