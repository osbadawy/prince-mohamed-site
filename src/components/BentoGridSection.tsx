"use client";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function BentoGridSection() {
  const t = useTranslations("Home.Bento");

  const items = [
    {
      title: t("item1.title"),
      description: t("item1.description"),
      header: <Skeleton image="/images/bento/bento1.jpg" alt={t("item1.alt")} />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("item2.title"),
      description: t("item2.description"),
      header: <Skeleton image="/images/bento/bento2.jpg" alt={t("item2.alt")} />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("item3.title"),
      description: t("item3.description"),
      header: <Skeleton image="/images/bento/bento3.jpg" alt={t("item3.alt")} />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("item4.title"),
      description: t("item4.description"),
      header: <Skeleton image="/images/bento/bento4.png" alt={t("item4.alt")} />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("item5.title"),
      description: t("item5.description"),
      header: <Skeleton image="/images/bento/bento5.jpg" alt={t("item5.alt")} />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("item6.title"),
      description: t("item6.description"),
      header: <Skeleton image="/images/bento/bento6.jpg" alt={t("item6.alt")} />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("item7.title"),
      description: t("item7.description"),
      header: <Skeleton image="/images/bento/bento7.jpg" alt={t("item7.alt")} />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <BentoGrid className="max-w-4xl my-20 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

type SkeletonProps = {
  image: string;
  alt?: string;
};

const Skeleton = ({ image, alt = "" }: SkeletonProps) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={image} alt={alt} className="w-full h-full object-cover" />
  </div>
);
