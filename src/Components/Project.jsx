import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const Project = ({ items }) => {
  const [projectHovered, setProjectHovered] = useState(false);

  return (
    <div
      data-aos="flip-left"
      className=" rounded-lg overflow-hidden shadow-md hover:shadow-lg shadow-primary-300/50 hover:shadow-primary-300/50 relative"
      onMouseEnter={() => setProjectHovered(true)}
      onMouseLeave={() => setProjectHovered(false)}
    >
      <a
        href={items.url}
        className=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={items.img}
          alt={items.name}
          className={`w-full opacity-30 lg:opacity-100 brightness-50  relative ${
            projectHovered ? "lg:opacity-30" : ""
          }`}
        />
      </a>
      <aside
        className={`project-links ${projectHovered ? "lg:opacity-100" : ""}`}
      >
        <a
          className=""
          href={items.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="hover hover:animate-spin" />
        </a>
        <a
          className=""
          href={items.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LiaExternalLinkAltSolid className="hover hover:translate-x-1  hover:-translate-y-1 duration-500" />
        </a>
      </aside>
      <div className="absolute text-center right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2">
        <h3 className="font-semibold text-xl mb-2 sm:text-3xl">{items.name}</h3>
        <p className="text-base italic sm:text-xl">{items.description}</p>
      </div>
      <div className="text-xs sm:text-base absolute bottom-2 left-3 flex gap-3 bg-primary-300/50 py-1 px-2 rounded-md">
        {items.stack.map((item, i) => (
          <p className="text-secondary-100" key={i + 1}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;
