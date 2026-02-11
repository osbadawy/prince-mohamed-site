import {HeroParallax} from "@/components/ui/Hero-parallax";
import MaskSection  from "@/components/MaskSection";
import BentoGridSection from "@/components/BentoGridSection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import {Nav} from "@/components/Nav";
import {products} from "@/util/data";

export default function Home() {
  return (
      <main >
        <Nav/>
        <HeroSection/>
        <HeroParallax products={products} />
        <MaskSection/>
        <BentoGridSection/>
        <Footer/>
      </main>
  );
}

