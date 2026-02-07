import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">Sketch2AI</h2>
    <div className="nav-links">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/draw">Draw</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  </nav>
);

export default Navbar;
