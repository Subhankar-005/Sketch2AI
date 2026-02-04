import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.div className="auth" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Login</h1>

      <form className="form">
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>

      <p>
        No account? <Link to="/signup">Sign up</Link>
      </p>
    </motion.div>
  );
}