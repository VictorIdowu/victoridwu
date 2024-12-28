import Intro from "./Intro";
import Projects from "./Projects";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";

const Body = () => {
  const [active, setActive] = useState("");

  return (
    <main className="my-0 mx-auto max-w-[1000px] px-4 sm:px-6 xl:px-0">
      <Router>
        <Header setActive={setActive} />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Nav active={active} setActive={setActive} />
      </Router>
    </main>
  );
};

export default Body;
