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
            Discover the power of{" "}
            <span className="text-green-500">Tailwind CSS v4</span> with native CSS
            variables and container queries with
            <span className="text-green-500">advanced animations</span>.
        </MaskContainer>
    )
}