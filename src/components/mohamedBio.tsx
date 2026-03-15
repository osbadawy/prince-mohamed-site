"use client";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { useTranslations } from "next-intl";

export function MohamedBio() {
  const t = useTranslations("PrinceMohamed.MohamedBio");

  const princeMohamedSections = [
    {
      title: t("section1.title"),
      badge: t("section1.badge"),
      image: "/images/mohamedBio/bento5.jpg",
      description: (
        <>
          <p>{t("section1.p1")}</p>
          <p>{t("section1.p2")}</p>
          <p>{t("section1.p3")}</p>
        </>
      ),
    },
    {
      title: t("section2.title"),
      badge: t("section2.badge"),
      image: "/images/mohamedBio/ITTF.png",
      description: (
        <>
          <p>{t("section2.p1")}</p>
          <p>{t("section2.p2")}</p>
          <p>{t("section2.p3")}</p>
        </>
      ),
    },
    {
      title: t("section3.title"),
      badge: t("section3.badge"),
      image: "/images/mohamedBio/hero15.jpg",
      description: (
        <>
          <p>{t("section3.p1")}</p>
          <p>{t("section3.p2")}</p>
          <p>{t("section3.p3")}</p>
        </>
      ),
    },
    {
      title: t("section4.title"),
      badge: t("section4.badge"),
      image: "/images/mohamedBio/hero5.jpg",
      description: (
        <>
          <p>{t("section4.p1")}</p>
          <p>{t("section4.p2")}</p>
          <p>{t("section4.p3")}</p>
        </>
      ),
    },
  ];

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {princeMohamedSections.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
