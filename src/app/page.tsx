import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Approach />
        <Work />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}
