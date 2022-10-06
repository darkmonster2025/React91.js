import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import React9axios from "./components/React9axios";
import React91 from "./components/React91";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to={"/Home"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Contact"}>Contact</Link>
          <Link to={"/React9axios"}>React9axios</Link>
          <Link to={"/React91"}>React91</Link>
        </div>
        <Routes>
          <Route path="/" element={<div>This is Main Rout</div>} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact/*" element={<Contact />} />
          <Route path="React9axios" element={<React9axios />} />
          <Route path="React91" element={<React91 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
