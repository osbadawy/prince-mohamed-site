"use client";
import { useTranslations } from "next-intl";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function PrinceQuote() {
  const t = useTranslations("PrinceMohamed.PrinceQuote");

  return <TextGenerateEffect words={t("words")} />;
}

