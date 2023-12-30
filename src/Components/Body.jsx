import Intro from "./Intro";
import Projects from "./Projects";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Body = () => {
  return (
    <main className="px-5">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default Body;
