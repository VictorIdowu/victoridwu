import { Link } from "react-router-dom";

const Nav = ({ active, setActive }) => {
  return (
    <footer className={`footer ease-in duration-500 bg-basketball`}>
      <ul className="flex text-base sm:text-xl gap-10 max-w-[1100px] mx-auto">
        {active !== "home" && active !== "" && (
          <li className={`nav`}>
            <Link
              onClick={() => setActive("home")}
              to={`/`}
              className={`hover`}
            >
              Home
            </Link>
          </li>
        )}
        {["Projects", "Contact"].map((item, i) => (
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
        <li className="nav">
          <Link
            to="https://drive.google.com/file/d/1DNO09ALYHXqL7ZasuhQfEL80UJJ0jeDZ/view?usp=sharing"
            className={`hover`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Nav;
