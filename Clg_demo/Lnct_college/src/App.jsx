import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Features from "./pages/Featurs";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Courses/>
      <Features/>
      <Gallery/>
      <About/>
      <Location/>
  
      
      <Contact/>

      <Routes>
    
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;