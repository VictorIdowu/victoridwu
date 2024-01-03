import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { Icon } from "@iconify/react";

const Socials = () => {
  return (
    <aside data-aos="fade-up" className={`social ease-in duration-700`}>
      <a
        className="socials"
        rel="noopener noreferrer"
        href="https://github.com/VictorIdowu"
        target="_blank"
      >
        <AiFillGithub />
      </a>
      <a
        className="socials"
        rel="noopener noreferrer"
        href="https://linkedin.com/in/vctoridowu"
        target="_blank"
      >
        <BiLogoLinkedin />
      </a>
      <a
        className="socials"
        rel="noopener noreferrer"
        href="https://twitter.com/VictorIdowu_"
        target="_blank"
      >
        <Icon icon="ri:twitter-x-fill" className="scale-75" />
      </a>
    </aside>
  );
};

export default Socials;
