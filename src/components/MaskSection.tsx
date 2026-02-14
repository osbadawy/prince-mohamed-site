"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function MaskSection() {
    return (
        <MaskContainer
            revealText={
              <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-white text-slate-800 
              dark:text-black">
               The Transformation <br/> of<br/> The Saudi Table Tennis Federation
              </p>
            }
            className="h-[40rem] rounded-md border text-white dark:text-black"
        >
            <span className="text-green-500">The Saudi Table Tennis Federation</span> grew through a comprehensive gap assessment, 
            launching a federation-wide strategy with<span className="text-green-500"> 16+ initiatives</span> across six verticals, 
            hiring 20 staff to serve<span className="text-green-500">  190+ clubs and 4,000+ players.</span>
        </MaskContainer>
    )
}