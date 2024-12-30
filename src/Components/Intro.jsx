import Experience from "./Experience";
import Projects from "./Projects";
import Socials from "./Socials";
import Stack from "./Stack";
import { motion, useScroll } from "framer-motion";

const Intro = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="sections xl:pl-5 mb-10">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-secondary-200 z-50 fixed top-0 left-0 right-0 h-1 transform origin-[0%]"
      />
      <div data-aos="fade-right" className={`ease-in duration-500 `}>
        <p className="text">Hello, I'm Victor</p>
        <h1 className="font-bold text-3xl md:text-6xl uppercase mx-0 my-3.5">
          A front-end <br /> Engineer.
        </h1>
        <p className="text text-secondary-100">
          With over 2 years of professional experience specializing in web
          development and product design technologies. Skilled in building
          large-scale systems and SaaS products, with a strong focus on solving
          complex problems and delivering high-performance, scalable solutions.
          Passionate about leveraging modern web technologies to craft
          interactive, animated web pages that enhance user experience and drive
          product success.
        </p>
      </div>
      <Socials />
      <Stack />
      <Projects amount={4} />
      <Experience />
    </div>
  );
};

export default Intro;
