"use client";

import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export function MediaHero() {
  const t = useTranslations("Media.MediaHero");
  const locale = useLocale();

  const images = [
    "/images/media/media1.jpg",
    "/images/media/media2.jpg",
    "/images/media/media3.jpg",
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {t.rich("heading", {
            br: () => <br />
          })}
        </motion.p>

        <Link href={`/${locale}/Interview`}>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-400/10 border-gray-500/20 text-white mx-auto text-center rounded-full relative mt-4 cursor-pointer">
            <span>{t("cta")}</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
