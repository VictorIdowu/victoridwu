import Socials from "./Socials";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Contact = (props) => {
  return (
    <section
      className={`sections ease-in duration-500 xl:pl-5 mb-44 grid grid-cols-2fr-1fr grid-rows-2`}
    >
      <div className="">
        <h2 data-aos="fade-up-left" className="h2 mb-7">
          Reach Out!
        </h2>
        <p data-aos="fade-up-left" className="text">
          Got a question or proposal? Go ahead. I'm Open To Freelance,
          Internship and Junior Developer Roles. Get In Touch With Me
        </p>
        <Socials />
      </div>
      <aside
        data-aos="fade-up-left"
        className="row-start-2 mt-10 items-center flex gap-3 md:justify-around h-fit"
      >
        <a
          href="mailto:victoridwu@gmail.com"
          className="text-sm font-semibold text-secondary-100 transition-all duration-500 border-secondary-100 border-2 p-2 md:p-4 md:text-xl hover:bg-secondary-100 hover:text-primary-200 rounded-lg flex items-center gap-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          Write me
          <MdOutlineEmail />
        </a>
        <a
          href="https://wa.me/message/4XCLWV6SJODYO1"
          className="text-sm font-semibold text-secondary-100 transition-all duration-500 border-secondary-100 border-2 p-2 md:p-4 md:text-xl hover:bg-secondary-100 hover:text-primary-200 rounded-lg flex items-center gap-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          DM
          <BsWhatsapp />
        </a>
      </aside>
    </section>
  );
};

export default Contact;
