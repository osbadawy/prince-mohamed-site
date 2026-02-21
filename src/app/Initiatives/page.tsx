import Footer from "@/components/Footer";
import {Nav} from "@/components/Nav";
import {InitiativesHero} from "@/components/InitiativesHero";
import {InitiativeCarousel} from "@/components/InitiativeCarousel";
import { CtaInitiatives } from "@/components/CtaInitiatives";


export default function Home() {
  return (
      <main >
        <Nav/>
        <InitiativesHero/>
        <InitiativeCarousel/>
        <CtaInitiatives/>
        <Footer/>
      </main>
  );
}

