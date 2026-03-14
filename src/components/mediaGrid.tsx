"use client";

import { LayoutGrid } from "./ui/layout-grid";
import { useTranslations } from "next-intl";

export function MediaGrid() {
  const t = useTranslations("Media.MediaGrid");

  const SkeletonOne = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        {t("item1.title")}
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t("item1.text")}
      </p>
    </div>
  );

  const SkeletonTwo = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        {t("item2.title")}
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t("item2.text")}
      </p>
    </div>
  );

  const SkeletonThree = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        {t("item3.title")}
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t("item3.text")}
      </p>
    </div>
  );

  const SkeletonFour = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        {t("item4.title")}
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t("item4.text")}
      </p>
    </div>
  );

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: "/images/media/grid1.jpg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: "/images/media/grid2.jpg",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "/images/media/grid3.jpg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "/images/media/grid4.jpg",
    },
  ];

  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
