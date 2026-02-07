import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";


const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
      {/* ===== HERO SECTION ===== */}
      <section className="landing">
        <motion.div
          className="hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Turn <span>Rough Sketches</span> into <br /> Stunning AI Art
          </h1>

          <p>
            Sketch2AI analyzes your hand‑drawn ideas and transforms them into
            clean, professional visuals using AI.
          </p>

          <div className="hero-buttons">
            {/* IMPORTANT: use button, not Link */}
            <button
              onClick={() => navigate("/draw")}
              className="btn primary"
            >
              Start Drawing
            </button>

            <Link to="/about" className="btn outline">
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        {/* Background blobs */}
        <div className="footer-blob blob-1"></div>
        <div className="footer-blob blob-2"></div>

        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Sketch2AI</h2>
          <p>
            From messy ideas to meaningful designs.  
            Draw freely — let AI do the magic.
          </p>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </div>

          <span className="footer-copy">
            © {new Date().getFullYear()} Sketch2AI. All rights reserved.
          </span>
        </motion.div>
      </footer>
    </>
  );
};

export default Landing
