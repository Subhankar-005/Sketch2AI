import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="page about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>About Sketch2AI</h1>

      <p className="about-intro">
        Sketch2AI converts rough hand-drawn sketches into clean, beautiful AI‑generated designs.
        Just draw anything — our AI understands and refines it into a proper outcome.
      </p>

      {/* ✅ Benefits */}
      <div className="benefits">
        <h2>Why Use Sketch2AI?</h2>
        <div className="benefit-grid">
          <div className="benefit-card">
            ⚡ Instant AI conversion
          </div>
          <div className="benefit-card">
            🎨 No drawing skills required
          </div>
          <div className="benefit-card">
            💡 Turn ideas into visuals
          </div>
          <div className="benefit-card">
            🚀 Fast & easy to use
          </div>
        </div>
      </div>

      {/* ✅ Team Section */}
      <div className="team">
        <h2>Meet Our Team</h2>

        <div className="team-grid">
          <div className="member">
            <img src="public/subhankar.jpeg" alt="Member 1" />
            <h3>Member One</h3>
            <p>Frontend Developer</p>
          </div>

          <div className="member">
            <img src="/team2.jpg" alt="Member 2" />
            <h3>Member Two</h3>
            <p>Backend Developer</p>
          </div>

          <div className="member">
            <img src="/team3.jpg" alt="Member 3" />
            <h3>Member Three</h3>
            <p>AI / ML Engineer</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
