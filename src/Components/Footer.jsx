import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const [active, setActive] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ease-in duration-500 bg-basketball`}>
      <ul className="flex text-base sm:text-xl gap-10">
        {["About", "Contact", "Projects"].map((item, i) => (
          <li key={i + 1} className="nav">
            <Link to={`/${item.toLowerCase()}`} className="hover">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <p className="">
        © <span className="year">{currentYear}</span> VictorIdowu
      </p>
    </footer>
  );
};

export default Footer;
