import Intro from "./Intro";
import Projects from "./Projects";
import Header from "./Header";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";
import NotFound from "./NotFound";

const Body = () => {
  const [active, setActive] = useState("");

  return (
    <main className="my-0 mx-auto max-w-[1000px] px-4 sm:px-6 xl:px-0">
      <Router>
        <Header setActive={setActive} />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Nav active={active} setActive={setActive} />
      </Router>
    </main>
  );
};

export default Body;
