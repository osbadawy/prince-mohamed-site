import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {Credentials} from "@/components/Credentials"
 
export default function CredentialsSection() {
  return (
    <div className="flex flex-col px-20 justify-center md:h-[40rem] md:my-20 my-40 pb-20">
        <div className="h-[20rem] px-4 flex items-center justify-center hidden md:block">
          <TextHoverEffect text="RESPONSIBILITY" />
        </div>
        <div className="justify-center md:min-w-xl ">
        <Credentials/>
        </div>
    </div>
  );
}