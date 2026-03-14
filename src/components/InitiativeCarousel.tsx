"use client";

import {useTranslations} from "next-intl";
import {Carousel, Card} from "@/components/ui/apple-cards-carousel";

export function InitiativeCarousel() {
  const t = useTranslations("Initiatives.InitiativeCarousel");

  const data = [
    {
      category: t("item1.category"),
      title: t("item1.title"),
      src: "/images/initiatives/APP.png",
      content: (
        <InitiativeContent
          title={t("item1.contentTitle")}
          image="/images/initiatives/APP.png"
          text={t("item1.contentText")}
        />
      ),
    },
    {
      category: t("item2.category"),
      title: t("item2.title"),
      src: "/images/initiatives/init.jpg",
      content: (
        <InitiativeContent
          title={t("item2.contentTitle")}
          image="/images/initiatives/init.jpg"
          text={t("item2.contentText")}
        />
      ),
    },
    {
      category: t("item3.category"),
      title: t("item3.title"),
      src: "/images/initiatives/init3.jpg",
      content: (
        <InitiativeContent
          title={t("item3.contentTitle")}
          image="/images/initiatives/init3.jpg"
          text={t("item3.contentText")}
        />
      ),
    },
    {
      category: t("item4.category"),
      title: t("item4.title"),
      src: "/images/initiatives/init4.jpg",
      content: (
        <InitiativeContent
          title={t("item4.contentTitle")}
          image="/images/initiatives/init4.jpg"
          text={t("item4.contentText")}
        />
      ),
    },
    {
      category: t("item5.category"),
      title: t("item5.title"),
      src: "/images/initiatives/init5.jpg",
      content: (
        <InitiativeContent
          title={t("item5.contentTitle")}
          image="/images/initiatives/init5.jpg"
          text={t("item5.contentText")}
        />
      ),
    },
    {
      category: t("item6.category"),
      title: t("item6.title"),
      src: "/images/initiatives/init6.jpg",
      content: (
        <InitiativeContent
          title={t("item6.contentTitle")}
          image="/images/initiatives/init6.jpg"
          text={t("item6.contentText")}
        />
      ),
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {t("heading")}
      </h2>

      <div dir="ltr">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const InitiativeContent = ({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {text}
      </p>

      <img
        src={image}
        alt={title}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8 rounded-xl"
      />
    </div>
  );
};
