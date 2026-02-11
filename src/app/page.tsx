import {HeroParallax} from "@/components/ui/Hero-parallax";
import {products} from "@/util/data";

export default function Home() {
  return (
      <main >
        <HeroParallax products={products} />
      </main>
  );
}

