import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake login (later you connect backend here)
    login();

    // Redirect after login
    navigate("/draw");
  };

  return (
    <motion.div
      className="auth"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h1>Login</h1>

      <form className="form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </motion.div>
  );
};

export default Login;
