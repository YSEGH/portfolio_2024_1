import Home from "@/components/Home/Home";
import styles from "./page.module.css";
import About from "@/components/About/About";
import Skill from "@/components/Skill/Skill";
import Project from "@/components/Project/Project";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function RootPage() {
  return (
    <main className={styles.main}>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
