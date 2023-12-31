import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const [active, setActive] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    console.log(window.location.pathname.length);
    if (window.location.pathname.length < 2) setActive("");
  });

  return (
    <footer className={`footer ease-in duration-500 bg-basketball`}>
      <ul className="flex text-base sm:text-xl gap-10">
        {["About", "Contact", "Projects"].map((item, i) => (
          <li key={i + 1} className={`nav `}>
            <Link
              onClick={() => setActive(item)}
              to={`/${item.toLowerCase()}`}
              className={`hover ${active === item && "text-secondary-200"}`}
            >
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
