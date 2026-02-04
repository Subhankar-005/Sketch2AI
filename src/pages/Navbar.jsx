import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">Sketch2AI</NavLink>

      <div className="nav-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavLink to="/contact" className="nav-item">Contact</NavLink>
        <NavLink to="/login" className="nav-item">Login</NavLink>
      </div>
    </nav>
  );
}
