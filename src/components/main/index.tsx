import { About } from "../sections/about";
import { Contact } from "../sections/contact";
import { Experience } from "../sections/experience";
import { Hero } from "../sections/hero";
import { Projects } from "../sections/projects";

export function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
