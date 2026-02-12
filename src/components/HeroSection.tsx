"use client";

import { motion } from "motion/react";
import { AuroraBackground } from "./ui/aurora-background";

export default function HeroSection() {
  return (
    <AuroraBackground className="relative overflow-hidden min-h-screen">
      {/* Image: centered under 1100px, right-aligned above 1100px */}
      <img
        src="/images/heroSection/prince1.png"
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[100%] w-auto object-contain pointer-events-none z-0
                   md:left-auto md:translate-x-0 md:right-12 lg:mr-10 xl:mr-10 2xl:mr-20 3xl:mr-30 drop-shadow-[0_40px_60px_rgba(0,0,0,0.03)]"
      />

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col gap-4
           justify-end lg:justify-center
           min-h-screen
           px-4 md:px-12 lg:px-16 lg:right-50 lg:max-w-lg
           xl:max-w-4xl xl:right-40 2xl:right-50
           text-left"

      >
        <div className="text-3xl md:text-4xl xl:text-6xl font-bold dark:text-white">
          Prince Mohammed Bin Abdulrahman Bin Nasser AlSaud
        </div>

        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Kingdom of Saudi Arabia
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
