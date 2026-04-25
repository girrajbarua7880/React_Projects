function Location() {
  return (
    <section id="location">
        <div className="location-section">
      <h2>Our Location</h2>
      <p>Visit LNCT Campuses</p>

     

        {/* Indore Map */}
        <div className="map-box">
          <h3>LNCT (Bhopal)Indore Campus (LKCT)</h3>
          <iframe
            src="https://www.google.com/maps?q=LNCT+Indore&output=embed"
            loading="lazy"
          ></iframe>
        </div>

    </div>
    </section>
  );
}

export default Location;