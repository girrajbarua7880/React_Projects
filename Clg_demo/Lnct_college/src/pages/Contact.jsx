function Contact() {
  return (
   <section id="contact">
     <div className="contact-section">
      <h2>Contact LNCT Campuses</h2>
      <p>Reach out to our campuses for admissions & inquiries</p>

      <div className="campus-container">

        {/* Bhopal Campus */}
        <div className="campus-box">
          <h3>LNCT Bhopal</h3>
          <p>📍 Kalchuri Nagar, Raisen Road, Bhopal (M.P.)</p>
          <p>📞 +91 755 6185300</p>
          <p>📧 info@lnct.ac.in</p>
        </div>

        {/* Indore Campus */}
        <div className="campus-box">
          <h3>LNCT Indore (Formerly LKCT)</h3>
          <p>📍 infront of walaji wafers Bheshlya Rau, Indore (M.P.)</p>
          <p>📞 +91 731 4226000</p>
          <p>📧 indore@lnct.ac.in</p>
        </div>

      </div>

      {/* CONTACT FORM */}
      <div className="form-area">
        <h3>Send Us a Message</h3>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message 🚀</button>
      </div>
    </div>
   </section>
  );
}

export default Contact;