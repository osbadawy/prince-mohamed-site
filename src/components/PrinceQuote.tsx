"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `My first year as President of the Saudi Table Tennis Federation has been both rewarding and inspiring. We have achieved significant milestones, including a record-breaking medal tally at regional and international competitions. We also witnessed unprecedented commercial growth, securing more than eight strategic sponsors and expanding the reach and visibility of our tournaments through the Jahez Premier Division.

While these achievements establish a strong foundation, they represent only the beginning of our journey.

Over the next three years, I am dedicated to advancing the goals of Saudi Vision 2030 through sport by enabling a healthy, active, and proud community. My focus is on creating inclusive pathways that allow everyone to participate, compete, and grow — both athletically and personally — while inspiring and empowering the next generation of champions.

Sport has always been a powerful unifier, connecting families, schools, and communities across the Kingdom. I remain fully committed to strengthening its impact for generations to come.`;
export function PrinceQuote() {
  return <TextGenerateEffect words={words} />;
}
