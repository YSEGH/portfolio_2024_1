import Home from "@/components/Home/Home";
import styles from "./page.module.css";
import Nav from "@/components/Nav/Nav";
import About from "@/components/About/About";
import Skill from "@/components/Skill/Skill";
import Project from "@/components/Project/Project";
import Contact from "@/components/Contact/Contact";

export default function RootPage() {
  return (
    <main className={styles.main}>
      <Nav />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}
