import { Link } from "react-router-dom";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ease-in duration-500 bg-basketball`}>
      <ul className="flex text-base sm:text-xl gap-10">
        <li className="nav">
          <Link to="/about" className="hover">
            About
          </Link>
        </li>
        <li className="nav">
          <Link to="/contact" className="hover">
            Contact
          </Link>
        </li>
        <li className="nav">
          <Link to="/projects" className="hover">
            Projects
          </Link>
        </li>
      </ul>
      <p className="">
        © <span className="year">{currentYear}</span> VictorIdowu
      </p>
    </footer>
  );
};

export default Footer;
