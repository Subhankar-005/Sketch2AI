import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
  return (
    <motion.div className="auth" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Create Account</h1>

      <form className="form">
        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Create Account</button>
      </form>

      <p>
        Already registered? <Link to="/login">Login</Link>
      </p>
    </motion.div>
  );
}