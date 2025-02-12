import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { Icon } from "@iconify/react";

const socials = [
  { icon: <AiFillGithub />, url: "https://github.com/VictorIdowu" },
  { icon: <BiLogoLinkedin />, url: "https://linkedin.com/in/vctoridowu" },
  // {
  //   icon: <Icon icon="ri:twitter-x-fill" className="scale-75" />,
  //   url: "https://twitter.com/VictorIdowu_",
  // },
];

const Socials = () => {
  return (
    <aside data-aos="fade-up" className={`social ease-in duration-700`}>
      {socials.map((social, i) => (
        <a
          key={i}
          className="md:mb-4 hover:text-secondary-200 transition-colors duration-300"
          rel="noopener noreferrer"
          href={social.url}
          target="_blank"
        >
          {social.icon}
        </a>
      ))}
    </aside>
  );
};

export default Socials;
