"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useOutsideClick } from "@/hooks/use-outside-click";

type Card = {
  id: string;
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: React.ReactNode | ((t: ReturnType<typeof useTranslations>) => React.ReactNode);
};

export function Credentials() {
  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const uid = useId();
  const t = useTranslations("Home.Credentials");

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    document.body.style.overflow = active ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const localizedCards: Card[] = cards.map((card) => ({
    ...card,
    title: t(`${card.id}.title`),
    description: t(`${card.id}.description`),
    ctaText: t(`${card.id}.ctaText`),
  }));

  const localizedActive = active
    ? {
        ...active,
        title: t(`${active.id}.title`),
        description: t(`${active.id}.description`),
        ctaText: t(`${active.id}.ctaText`),
      }
    : null;

  return (
    <>
      <AnimatePresence>
        {localizedActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {localizedActive ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`close-${localizedActive.id}-${uid}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${localizedActive.id}-${uid}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${localizedActive.id}-${uid}`}>
                <img
                  width={200}
                  height={200}
                  src={localizedActive.src}
                  alt={localizedActive.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-fit object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${localizedActive.id}-${uid}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {localizedActive.title}
                    </motion.h3>

                    <motion.p
                      layoutId={`description-${localizedActive.id}-${uid}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {localizedActive.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${localizedActive.id}-${uid}`}
                    href={localizedActive.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    rel="noreferrer"
                  >
                    {localizedActive.ctaText}
                  </motion.a>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof localizedActive.content === "function"
                      ? localizedActive.content(t)
                      : localizedActive.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {localizedCards.map((card) => (
          <motion.div
            layoutId={`card-${card.id}-${uid}`}
            key={`card-${card.id}-${uid}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.id}-${uid}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-fit object-top"
                />
              </motion.div>

              <div>
                <motion.h3
                  layoutId={`title-${card.id}-${uid}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  layoutId={`description-${card.id}-${uid}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            <motion.button
              layoutId={`button-${card.id}-${uid}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards: Card[] = [
  {
    id: "sttf-president",
    description: "",
    title: "",
    src: "./images/credentials/STTF.jpg",
    ctaText: "",
    ctaLink: "https://sttf.sa/about",
    content: (t) => <p>{t.rich("sttf-president.content", { br: () => <><br /><br /></> })}</p>,
  },
  {
    id: "wattf-president",
    description: "",
    title: "",
    src: "./images/credentials/ATTU.png",
    ctaText: "",
    ctaLink:
      "https://www.saudiarabiabreakingnews.com/post/west-asia-table-tennis-federation-elects-prince-mohammed-bin-abdulrahman-as-president",
    content: (t) => <p>{t.rich("wattf-president.content", { br: () => <><br /><br /></> })}</p>,
  },
  {
    id: "ittf-advisory",
    description: "",
    title: "",
    src: "./images/credentials/ITTF.png",
    ctaText: "",
    ctaLink:
      "https://www.ittf.com/2025/07/21/ittf-president-creates-advisory-commission-led-by-prince-mohammed-bin-abdulrahman-al-saud/",
    content: (t) => <p>{t.rich("ittf-advisory.content", { br: () => <><br /><br /></> })}</p>,
  },
  {
    id: "attu-member",
    description: "",
    title: "",
    src: "./images/credentials/ATTU.png",
    ctaText: "",
    ctaLink: "https://directory.ittf.com/#/home?selected_continent=latin%20america",
    content: (t) => <p>{t.rich("attu-member.content", { br: () => <><br /><br /></> })}</p>,
  },
];
