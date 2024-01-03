import { Link } from "react-router-dom";

const Footer = ({ active, setActive }) => {
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
    </footer>
  );
};

export default Footer;
