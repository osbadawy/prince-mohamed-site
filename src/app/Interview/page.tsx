import Footer from "@/components/Footer";
import {Nav} from "@/components/Nav";
import { InterviewRequestForm } from "@/components/interviewRequestForm";

export default function Home() {
  return (
      <main >
        <Nav/>
        <InterviewRequestForm/>
        <Footer/>
      </main>
  );
}

