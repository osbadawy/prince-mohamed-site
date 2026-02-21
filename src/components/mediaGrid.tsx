"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function MediaGrid() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Welcomed by the Chinese Table Tennis Federation
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Prince Mohammed bin Abdulrahman bin Nasser AlSaud was formally welcomed
        at a major tournament hosted in China, reinforcing the strong sporting
        ties between the Kingdom of Saudi Arabia and the People’s Republic of China.
        The visit reflected growing cooperation and mutual respect between two
        nations committed to advancing table tennis at the highest level.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Strategic Discussions Between Federation Presidents
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Constructive discussions were held between Prince Mohammed, President of
        the Saudi Table Tennis Federation, and the President of the Chinese Table
        Tennis Federation. The dialogue focused on technical collaboration,
        athlete development pathways, knowledge exchange, and strengthening
        bilateral partnerships to elevate competitive standards across both nations.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Saudi Arabia Secures Gold
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Under Prince Mohammed’s leadership, Saudi Arabia achieved a landmark
        gold medal victory at an international tournament, marking a significant
        milestone in the nation’s sporting progress. The achievement reflects
        enhanced preparation standards, athlete support systems, and a renewed
        competitive ambition within the Saudi table tennis program.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Strengthening STTF & ITTF Collaboration
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Continued collaboration between the Saudi Table Tennis Federation and
        the International Table Tennis Federation has reinforced Saudi Arabia’s
        presence within the global sporting community. Through governance
        alignment, event development, and strategic engagement, these efforts
        position the Kingdom as an increasingly influential voice in international
        table tennis.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "./images/media/grid1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "./images/media/grid2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "./images/media/grid3.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
        "./images/media/grid4.jpg",
},
];
