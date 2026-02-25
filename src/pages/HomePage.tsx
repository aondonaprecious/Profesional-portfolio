/** @format */

// src/pages/HomePage.tsx
import Hero from "../components/organisms/Hero";
import ProjectGrid from "../components/organisms/ProjectGrid";
import ExperienceSection from "../components/organisms/ExperienceSection";
import Footer from "../components/organisms/Footer";
import WritingSection from "../components/organisms/WritingSection";
import ContactSection from "../components/organisms/ContactSection";

const HomePage = () => {
  return (
    <div className="pt-20">
      {" "}
      {/* Padding to account for fixed navbar */}
      <Hero />
      <div id="projects">
        <ProjectGrid />
      </div>
      {/* Experience and About sections will be added here on Day 6 */}
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="writing">
        <WritingSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
