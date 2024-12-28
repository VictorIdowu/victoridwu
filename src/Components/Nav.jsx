import { Link } from "react-router-dom";

const Nav = ({ active, setActive }) => {
  return (
    <footer className={`footer ease-in duration-500 bg-basketball`}>
      <ul className="flex text-base sm:text-xl gap-10 max-w-[1100px] mx-auto">
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

export default Nav;
