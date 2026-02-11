"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function MaskSection() {
    return (
        <MaskContainer
            revealText={
              <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
                President of<br/> the Saudi Table Tennis Federation
              </p>
            }
            className="h-[40rem] rounded-md border text-white dark:text-black"
        >
            <span className="text-green-500">The Saudi table tennis Federation </span> 
            has grown  through strategy, innovation, and athlete development 
            with over<span className="text-green-500"> 52 </span>professional players.
        </MaskContainer>
    )
}