import {HeroParallax} from "@/components/ui/Hero-parallax";
import MaskSection  from "@/components/MaskSection";
import {Nav} from "@/components/Nav";
import {products} from "@/util/data";

export default function Home() {
  return (
      <main >
        <Nav/>
        <HeroParallax products={products} />
        <MaskSection/>
      </main>
  );
}

