import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Contact Us</h1>

      <form className="form">
        <input placeholder="Your Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message" rows="5"></textarea>
        <button>Send Message</button>
      </form>
    </motion.div>
  );
}