import Socials from "./Socials";
import Stack from "./Stack";

const About = () => {
  return (
    <section
      className={`sections xl:pl-5 mb-44 lg:grid lg:grid-cols-2fr-1fr lg:grid-rows-2`}
    >
      <div className="">
        <h2 data-aos="fade-down" className={`h2 mb-7 ease-in duration-500 `}>
          About me
        </h2>
        <p
          data-aos="fade-right"
          className={`text pb-1 ease-in duration-500 text-secondary-100 leading-loose`}
        >
          Hello, my name is Victor, I'm a passionate Front-End Engineer who
          thrives on solving problems and crafting interactive, animated web
          pages to enhance user experiences. My journey is fueled by the
          aspiration to evolve into a proficient Full-stack Developer and
          eagerly embracing the challenges ahead.
        </p>
        <p
          data-aos="fade-right"
          className={`text text-secondary-100 ease-in duration-500 leading-loose`}
        >
          I am proficient in the following technologies: <br /> Client-Side
          Scripting: [ TypeScript, Javascript, ES6+, React.Ts, React.Js,
          Next.Js, Next.Ts, & APIs ]<br /> Mark-Up: [ JSX, HTML5, CSS3,
          Bootstrap, Tailwind CSS & CSS Preprocessors like SASS, SCSS & Styled
          Components ] <br />
          Version Control using Git & Github.
        </p>
      </div>
      <div className="row-start-2">
        <Stack />
      </div>
    </section>
  );
};

export default About;
