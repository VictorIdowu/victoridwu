import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ setActive }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(async () => {
      const date = new Date();
      const hour = date.getHours();
      const mins = date.getMinutes();

      const period = hour >= 12 ? "PM" : "AM";

      const hours12 = hour % 12 || 12;

      const time12 = `${hours12}:${mins < 10 ? "0" + mins : mins} ${period}`;

      setTime(time12);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header data-aos="fade-down" className="header">
      <div
        className={`flex place-content-between ease-in duration-500 max-w-[1100px] mx-auto px-3`}
      >
        <Link
          onClick={() => setActive("")}
          to="/"
          className="md:text-2xl font-medium cursor-pointer hover"
        >
          Victor Idowu
        </Link>
        <p className="text-xs items-center flex gap-2">
          {time}
          <img
            alt="🇳🇬"
            draggable="false"
            src="https://abs-0.twimg.com/emoji/v2/svg/1f1f3-1f1ec.svg"
            title="Flag of Nigeria"
            className="w-4 pb-1"
          ></img>
        </p>
      </div>
    </header>
  );
};

export default Header;
