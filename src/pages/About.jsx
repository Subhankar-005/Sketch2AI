import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <motion.div
      className="about-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* ===== HERO ===== */}
      <section className="about-hero">
        <span className="badge">✨ About SketchAI</span>

        <h1>
          Transform Your <span>Imagination</span><br />
          Into Stunning Art
        </h1>

        <p>
          SketchAI is a revolutionary platform that uses cutting‑edge artificial
          intelligence to transform your simple sketches into beautiful,
          professional‑quality artwork in various artistic styles.
        </p>
      </section>

      {/* ===== VIDEO ===== */}
      <section className="video-box">
        <div className="play-btn">▶</div>
        <p>Click to watch tutorial video</p>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="why">
        <h2>
          Why Choose <span>SketchAI</span>?
        </h2>
        <p>
          Discover the features that make SketchAI the perfect tool for artists
          and creators
        </p>

        <div className="why-grid">
          <div className="why-card">
            <div className="icon">🪄</div>
            <h3>AI‑Powered Transformations</h3>
            <p>
              Turn your simple sketches into stunning artwork using advanced AI
              algorithms.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">⚡</div>
            <h3 className="highlight">Instant Results</h3>
            <p>
              Get multiple style variations of your drawings in seconds, not
              hours.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">🎨</div>
            <h3>Multiple Art Styles</h3>
            <p>
              Choose from watercolor, oil painting, anime, cyberpunk and more.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">💾</div>
            <h3>Save Your Work</h3>
            <p>
              Build a personal gallery of all your AI‑generated masterpieces.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">✅</div>
            <h3>Easy to Use</h3>
            <p>
              No artistic skills required. Just draw, select a style and let AI
              do the magic.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how">
        <h2>
          How It <span>Works</span>
        </h2>
        <p>Four simple steps to create your masterpiece</p>

        <div className="steps">
          <div className="step">
            <div className="step-no">1</div>
            <h3>Draw</h3>
            <p>Create a simple sketch on our digital canvas</p>
          </div>

          <div className="step">
            <div className="step-no">2</div>
            <h3>Select Style</h3>
            <p>Choose from our curated art styles</p>
          </div>

          <div className="step">
            <div className="step-no">3</div>
            <h3>Generate</h3>
            <p>Let AI transform your sketch into beautiful art</p>
          </div>

          <div className="step">
            <div className="step-no">4</div>
            <h3>Download</h3>
            <p>Save or share your final artwork</p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="cta-icon">✨</div>
        <h2>Ready to Create?</h2>
        <p>
          Start transforming your sketches into stunning artwork today. No
          experience required — just your imagination!
        </p>

        <Link to="/draw" className="cta-btn">
          🎨 Start Drawing Now
        </Link>
      </section>
    </motion.div>
  );
}
