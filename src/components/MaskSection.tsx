"use client";
import {MaskContainer} from "@/components/ui/svg-mask-effect";
import {useTranslations} from "next-intl";

export default function MaskSection() {
  const t = useTranslations("MaskSection");

  return (
    <MaskContainer
      revealText={
        <p
          className="mx-auto max-w-4xl text-center text-4xl font-bold text-white text-slate-800 
          dark:text-black"
        >
          {t.rich("revealText", {
            br: () => <br />
          })}
        </p>
      }
      className="h-[40rem] rounded-md border text-white dark:text-black"
    >
      {t.rich("body", {
        highlight: (chunks) => <span className="text-green-500">{chunks}</span>
      })}
    </MaskContainer>
  );
}
