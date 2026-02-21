import Footer from "@/components/Footer";
import {Nav} from "@/components/Nav";
import { MediaHero } from "@/components/mediaHero";
import { MediaGrid } from "@/components/mediaGrid";
import { MediaRequest } from "@/components/mediaRequest";

export default function Home() {
  return (
      <main >
        <Nav/>
        <MediaHero />
        <MediaGrid/>
        <MediaRequest/>
        <Footer/>
      </main>
  );
}

