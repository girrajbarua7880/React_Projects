function Courses() {
  return (
  <section id="courses">
      <div className="courses-section">
      <h2>Courses Offered</h2>
      <p>Explore programs available at LNCT Group of Colleges</p>

      <div className="courses-container">

        {/* Engineering */}
        <div className="course-card">
          <h3>🎓 Engineering</h3>
          <ul>
            <li>B.Tech (CSE, AI, Mechanical, Civil, Electrical, ECE)</li>
            <li>M.Tech (CSE, Structural, Thermal)</li>
          </ul>
          <p className="detail">⏱ Duration: 4 Years (B.Tech) | 2 Years (M.Tech)</p>
          <p className="detail">💡 Focus: Practical labs, projects, placements</p>
          <button>View Details</button>
        </div>

        {/* Computer Applications */}
        <div className="course-card">
          <h3>💻 Computer Applications</h3>
          <ul>
            <li>BCA (Bachelor of Computer Applications)</li>
            <li>MCA (Master of Computer Applications)</li>
          </ul>
          <p className="detail">⏱ Duration: 3 Years (BCA) | 2 Years (MCA)</p>
          <p className="detail">💡 Focus: Programming, Web, Software Development</p>
          <button>View Details</button>
        </div>

        {/* Management */}
        <div className="course-card">
          <h3>💼 Management</h3>
          <ul>
            <li>BBA (Bachelor of Business Administration)</li>
            <li>MBA (Master of Business Administration)</li>
          </ul>
          <p className="detail">⏱ Duration: 3 Years (BBA) | 2 Years (MBA)</p>
          <p className="detail">💡 Focus: Business skills, leadership, placements</p>
          <button>View Details</button>
        </div>

      </div>
    </div>
  </section>
  );
}

export default Courses;