import Projects from "./Projects";
import Socials from "./Socials";
import Stack from "./Stack";
import { motion, useScroll } from "framer-motion";

const Intro = () => {
  const { scrollYProgress } = useScroll();
  return (
    <section className="sections xl:pl-5 mb-44">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-secondary-200 z-50 fixed top-0 left-0 right-0 h-1 transform origin-[0%]"
      />
      <div data-aos="fade-right" className={`ease-in duration-500 `}>
        <p className="text">Hello, I'm Victor</p>
        <h1 className="font-bold text-3xl md:text-6xl uppercase mx-0 mt-3.5 mb-10">
          A front-end <br /> Engineer.
        </h1>
        <p className="text text-secondary-100">
          I enjoy making interactive and animated web pages
          <br /> to ease user experience
          <br />
        </p>
      </div>
      <Socials display={"lg:hidden flex"} />
      <Stack />
      <Projects />
    </section>
  );
};

export default Intro;
