import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contacts">Contact</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About></About>} />
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/contact" element={<ContactUs></ContactUs>} />
      </Routes>
    </Router>
  );
}

export default App;
