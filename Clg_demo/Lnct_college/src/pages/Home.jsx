import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to LNCT Group of Colleges 🎓</h1>
        <p>Empowering Students for a Bright Future</p>
        <div className="hero-buttons">
         
          <Link to="/contact" className="btn">
          Explore Courses
          </Link>
          
          <button className="btn secondary">Apply Now</button>
        </div>
      </section>

    
    </div>
  );
}

export default Home;