import Project from "./Project";
import img1 from "../imgs/project1.png";
import img2 from "../imgs/project2.png";
import img3 from "../imgs/project3.png";
import img4 from "../imgs/project4.png";
import img5 from "../imgs/yourGalApp.png";
import img6 from "../imgs/MovieBox.png";
import img7 from "../imgs/filedrive.png";
import img8 from "../imgs/stylcon.png";

const projects = [
  {
    url: "https://stylconmarketplace.com/",
    img: img8,
    github: "https://github.com/VictorIdowu",
    name: "Stylcon",
    stack: ["Nextjs", "Tailwind", "Shadcn"],
    description: "Fashion Web App (Fashion production assistant)",
  },
  {
    url: "https://file-drive-gamma.vercel.app/",
    img: img7,
    github: "https://github.com/VictorIdowu/file-drive",
    name: "FileDrive",
    stack: ["Nextjs", "Typescript", "Convex", "Clerk", "Shadcn"],
    description: "File storage (Share files and colarborate)",
  },
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

const Projects = ({ amount = projects.length }) => {
  return (
    <section className="sections">
      <h2 data-aos="fade-down" className={`h2 mb-7 ease-in duration-300 `}>
        My Projects
      </h2>
      <div
        className={`grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-2 xl:gap-15 ease-in-out duration-1000`}
      >
        {projects.slice(0, amount).map((project, i) => (
          <Project items={project} key={i + 1} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
