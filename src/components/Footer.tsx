import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <div className="footer-brand">
              FINWEB<span>.</span>
            </div>
            <p className="footer-tagline">
              Financial operations and digital architecture, engineered as one
              growth system for international businesses.
            </p>
          </div>

          {/* Explore column */}
          <div className="footer-col">
            <h4>Explore</h4>
            <nav className="footer-links" aria-label="Explore navigation">
              <Link href="/financial-services">Financial services</Link>
              <Link href="/web-development">Web development</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          {/* Governance column */}
          <div className="footer-col">
            <h4>Governance</h4>
            <nav className="footer-links" aria-label="Governance navigation">
              <Link href="/privacy/request">Privacy request</Link>
              <a href="#cookie-preferences">Cookie preferences</a>
              <a href="mailto:privacy@finwebsolution.com">Privacy &amp; DPA</a>
              <a href="mailto:legal@finwebsolution.com">Terms</a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 FINWEB SOLUTION</span>
          <span>International English · Serving US, UK and EU teams</span>
        </div>
      </div>
    </footer>
  );
}
