import Project from "./Project";
import img1 from "../imgs/project1.png";
import img2 from "../imgs/project2.png";
import img3 from "../imgs/project3.png";
import img4 from "../imgs/project4.png";
import img5 from "../imgs/yourGalApp.png";
import img6 from "../imgs/MovieBox.png";
import Socials from "./Socials";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const projects = [
  {
    url: "https://moneybox-swart.vercel.app/",
    img: img6,
    github: "https://github.com/VictorIdowu/MoneyBox",
    name: "MovieBox",
    stack: ["Tailwind", "React"],
    description: "Movie App (Search and Discover)",
  },
  {
    url: "https://your-gallery.vercel.app/",
    img: img5,
    github: "https://github.com/VictorIdowu/YourGallery",
    name: "Your Gallery App",
    stack: ["Tailwind", "Vite + React"],
    description: "Photo Gallery Web application (Drag and Drop)",
  },
  {
    url: "https://minimal-living-cost-landing-page.netlify.app/",
    img: img1,
    github:
      "https://github.com/VictorIdowu/Minimum-Living-Cost-Landing-page.git",
    name: "Minimal Living Cost",
    stack: ["CSS", "JS"],
    description: "Real Estate Website",
  },
  {
    url: "https://teejayapartments.netlify.app/",
    img: img2,
    github: "https://github.com/VictorIdowu/TeeJay-Apartments.git",
    name: "TeeJay-Apartment",
    stack: ["CSS", "JS"],
    description: "Real Estate Website",
  },
  {
    url: "https://bankist-vic.netlify.app/",
    img: img3,
    github: "https://github.com/VictorIdowu/Bankist-app.git",
    name: "Bankist App",
    stack: ["CSS", "JS"],
    description: "Web Application",
  },
  {
    url: "https://mapty-app-vic.netlify.app/",
    img: img4,
    github: "https://github.com/VictorIdowu/Mapty-app.git",
    name: "Mapty App",
    stack: ["CSS", "JS"],
    description: "Web Application",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    smooth: true,
    offset: ["0 2", "0.01"],
  });

  return (
    <section ref={ref} className="sections mb-10">
      <h2 data-aos="fade-down" className={`h2 mb-7 ease-in duration-300 `}>
        My Projects
      </h2>
      <motion.section
        style={{
          scale: scrollYProgress,
        }}
        className={`grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-2 xl:gap-15 ease-in-out duration-1000`}
      >
        {projects.map((project, i) => (
          <Project items={project} key={i + 1} />
        ))}
      </motion.section>
      <Socials display={"hidden"} />
    </section>
  );
};

export default Projects;
