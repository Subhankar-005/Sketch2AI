import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <motion.div
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="logo animate-logo">Sketch2AI</div>

      <h1>
        From <span>Rough Sketch</span> to <span>Perfect Art</span>
      </h1>

      <p>
        Draw anything — even messy. Our AI understands and transforms it into
        clean, beautiful artwork.
      </p>

      <div className="btn-group">
        <Link to="/draw" className="btn primary">
          Start Drawing
        </Link>
        <Link to="/signup" className="btn outline">
          Create Account
        </Link>
      </div>
    </motion.div>
  );
}