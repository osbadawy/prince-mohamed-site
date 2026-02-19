import Footer from "@/components/Footer";
import {Nav} from "@/components/Nav";
import {PrinceHero} from "@/components/PrinceHero";
import {MohamedBio} from "@/components/mohamedBio";
import {PrinceQuote} from "@/components/PrinceQuote";

export default function Home() {
  return (
      <main >
        <Nav/>
        <PrinceHero/>
        <MohamedBio/>
        <PrinceQuote/>
        <Footer/>
      </main>
  );
}

