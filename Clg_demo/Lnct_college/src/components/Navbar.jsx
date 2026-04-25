import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">LNCT (Bhopal) indore Campus</h2>

      <div className="nav-links">
       <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a href="#features">Features</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#location">Location</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;