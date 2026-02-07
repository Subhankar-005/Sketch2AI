import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Sketch2AI</h2>
        <p>Draw freely — let AI turn it into art.</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Sketch2AI. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
