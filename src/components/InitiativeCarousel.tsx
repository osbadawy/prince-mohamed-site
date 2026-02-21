"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function InitiativeCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Latest Initiatives and Projects
      </h2>
      <Carousel items={cards} />
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

const data = [
  {
    category: "Digital Infrastructure",
    title: "An App That Learns & Grows With You",
    src: "./images/initiatives/APP.png",
    content: (
      <InitiativeContent
        title="Under Prince Mohammed’s leadership,"
        image="./images/initiatives/APP.png"
        text="the Saudi Table Tennis Federation introduced a digital ecosystem designed to modernize competition management, athlete tracking, and federation operations. The initiative enhanced transparency, data-driven decision making, and real-time engagement with clubs and players. By prioritizing digital transformation, the Federation has strengthened performance analytics, streamlined tournament organization, and positioned itself among the region’s most technologically progressive sporting bodies."
      />
    ),
  },
  {
    category: "Rising Talents",
    title: "Proving What Is Possible",
    src: "./images/initiatives/init.jpg",
    content: (
      <InitiativeContent
        title="Through structured talent pathways,"
        image="./images/initiatives/init.jpg"
        text="Prince Mohammed has expanded grassroots programs and high-performance development initiatives, enabling young Saudi athletes to compete confidently at regional and international levels. Enhanced training standards, exposure to international tournaments, and mentorship frameworks have resulted in measurable competitive growth and record-breaking performances—demonstrating what is possible when opportunity meets preparation."
      />
    ),
  },
  {
    category: "Onboarding The Best",
    title: "Securing The Future Of The Best Talent",
    src: "./images/initiatives/init3.jpg",
    content: (
      <InitiativeContent
        title="Recognizing that excellence begins with people,"
        image="./images/initiatives/init3.jpg"
        text="the Federation has strategically onboarded elite coaches, technical advisors, and performance specialists. These appointments have strengthened athlete preparation, improved coaching methodologies, and elevated the overall competitive framework. By investing in world-class expertise, Prince Mohammed has ensured long-term sustainability and international alignment in technical standards."
      />
    ),
  },
  {
    category: "New Partnerships",
    title: "Forging New Partnerships To Drive Innovation",
    src: "./images/initiatives/init4.jpg",
    content: (
      <InitiativeContent
        title="Expanding beyond traditional sponsorship models,"
        image="./images/initiatives/init4.jpg"
        text="Prince Mohammed secured strategic commercial partnerships and international collaborations that significantly increased the Federation’s visibility and financial stability. These alliances introduced new platforms for innovation, athlete development support, and event enhancement—marking a new era of international cooperation never before seen within Saudi table tennis."
      />
    ),
  },
  {
    category: "Event Highlights",
    title: "The Grand Opening For a New Era",
    src: "./images/initiatives/init5.jpg",
    content: (
      <InitiativeContent
        title="Under his presidency,"
        image="./images/initiatives/init5.jpg"
        text="the Federation elevated event presentation standards, modernized tournament production, and expanded spectator engagement. Flagship competitions such as the Jahez Premier Division showcased a refined competitive product, strengthened media coverage, and attracted broader community participation—setting new benchmarks for sporting excellence within the Kingdom."
      />
    ),
  },
  {
    category: "The Team",
    title: "The Saudi Team Securing First Place",
    src: "./images/initiatives/init6.jpg",
    content: (
      <InitiativeContent
        title="The national team’s recent achievements"
        image="./images/initiatives/init6.jpg"
        text="reflect a comprehensive transformation strategy focused on performance, preparation, and belief. With improved athlete support systems, international exposure, and performance monitoring, Saudi players have reached new podium finishes and competitive milestones. These victories symbolize more than medals—they represent a renewed national ambition driven by visionary leadership."
      />
    ),
  },
];