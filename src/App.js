import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import WorksSection from "./components/WorksSection";
import BlogSection from "./components/BlogSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ExpertiseSection />
      <WorksSection />
      <ExperienceSection />
      <BlogSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
