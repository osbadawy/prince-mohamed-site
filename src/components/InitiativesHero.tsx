"use client";

import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import { useTranslations, useLocale } from "next-intl";

export function InitiativesHero() {
  const t = useTranslations("Initiatives.InitiativesHero");
  const locale = useLocale();

  const worldText = t("world");
  const isArabic = locale === "ar";

  return (
    <div className="py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">

        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          {t("titleStart")}{" "}

          {/* Only render this span if NOT Arabic */}
          {!isArabic && (
            <span className="text-neutral-400">
              {worldText.split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          )}
        </p>

        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          {t("subtitle")}
        </p>

      </div>

      <WorldMap
        dots={[
          { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
          { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -53.8919 } },
          { start: { lat: -15.7975, lng: -53.8919 }, end: { lat: 8.7136, lng: 46.6753 } },
          { start: { lat: 8.7136, lng: 46.6753 }, end: { lat: 44.5074, lng: -1.1278 } },
          { start: { lat: 8.7136, lng: 46.6753 }, end: { lat: 43.1332, lng: 131.9113 } },
          { start: { lat: 8.7136, lng: 46.6753 }, end: { lat: -1.2921, lng: 36.8219 } },
        ]}
      />
    </div>
  );
}