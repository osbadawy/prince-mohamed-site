import {HeroParallax} from "@/components/ui/Hero-parallax";
import MaskSection  from "@/components/MaskSection";
import BentoGridSection from "@/components/BentoGridSection";
import {Nav} from "@/components/Nav";
import {products} from "@/util/data";

export default function Home() {
  return (
      <main >
        <Nav/>
        <HeroParallax products={products} />
        <MaskSection/>
        <BentoGridSection/>
      </main>
  );
}

