function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-box">
          <h3>LNCT Group</h3>
          <p>
            LNCT is one of the top institutes in Central India offering
            quality education, modern infrastructure, and excellent placements.
          </p>
        </div>

        {/* Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>📍 Bhopal & Indore (MP)</p>
          <p>📞 +91 755 6185300</p>
          <p>📧 info@lnct.ac.in</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 LNCT Group of Colleges | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;