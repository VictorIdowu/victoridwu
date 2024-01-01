import Intro from "./Intro";
import Projects from "./Projects";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

const Body = () => {
  const [active, setActive] = useState("");
  const url = window.location.pathname;

  // useEffect(() => {
  //   console.log(url);
  //   if (!url) setActive("");
  // }, [url]);

  return (
    <main className="px-5">
      <Router>
        <Header setActive={setActive} />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer active={active} setActive={setActive} />
      </Router>
    </main>
  );
};

export default Body;
