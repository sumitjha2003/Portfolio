import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";
import xLogo from "../assets/x-logo.svg";
import mailLogo from "../assets/mail.jpg";
import resumeImage from "../assets/Resume.png";
import backgroundImage from "../assets/profile.jpg";
import setupImage from "../assets/setup.jpg";
import fresherLogo from "../assets/experience/Fresher.png";

import { email, github, linkedin, twitter } from "../profileconfig";
import ProjectModal from "./modals/ProjectModal";
import SkillModal from "./modals/SkillModal";

const BentoLayout = ({ isDarkMode, toggleDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const gridRef = useRef(null);
  const [animationDone, setAnimationDone] = useState(false);

  // GSAP animations (kept the same as in the original code)
  useEffect(() => {
    const elements = gridRef.current.children;
    gsap.set(elements, {
      opacity: 0,
      y: () => -Math.random() * 500 - 100,
      x: () => 50 - Math.random() * 100,
    });
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      x: 0,
      stagger: 0.1,
      ease: "elastic.out(1, 0.75)",
      duration: 1.2,
      delay: 0.5,
      onComplete: () => setAnimationDone(true),
    });
  }, []);

  useEffect(() => {
    if (animationDone) {
      const elements = gridRef.current.children;
      for (let element of elements) {
        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 1.1,
            duration: 0.2,
            ease: "Power1.easeOut",
            overwrite: "auto",
            zIndex: 10,
          });
        });
        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            duration: 0.2,
            ease: "Power1.easeOut",
            overwrite: "auto",
            zIndex: 1,
          });
        });
      }
    }
  }, [animationDone]);

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
      {/* Dark/Light Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="p-3 px-4 bg-gray-800 text-white rounded-md fixed top-4 right-4 z-50"
      >
        {isDarkMode ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </button>

      <div ref={gridRef} className="grid grid-cols-4 gap-20 p-4">
        {/* Profile Image (top half) */}

        {/* Left half (bottom) */}
        <div className="col-span-2 grid grid-rows-[auto_1fr] gap-0"> {/* Removed gap */}
        {/* Social Media Icons */}
        <div className="grid grid-cols-4 gap-1"> {/* Reduced gap */}

          {/* Email */}
          <div className="aspect-square rounded-xl overflow-hidden">
              <a href={`mailto:${email}`} className="w-full h-full flex items-center justify-center">
                <img src={mailLogo} alt="Mail Logo" className="w-3/4 h-3/4 object-contain" />
              </a>
            </div>

            {/* LinkedIn */}
          <div className="aspect-square rounded-xl overflow-hidden">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
              <img src={linkedInLogo} alt="LinkedIn Logo" className="w-3/4 h-3/4 object-contain" />
            </a>
          </div>

          
          {/* GitHub */}
          <div className="aspect-square rounded-xl overflow-hidden"> {/* Removed shadow and border */}
            <a href={github} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
              <img src={githubLogo} alt="GitHub Logo" className="w-3/4 h-3/4 object-contain" />
            </a>
          </div>


          {/* X/Twitter */}
          <div className="aspect-square rounded-xl overflow-hidden">
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
              <img src={xLogo} alt="XTwitter" className="w-3/4 h-3/4 object-contain" />
            </a>
          </div>

          
        </div>

        {/* Placeholder for additional content */}
        <div className="h-24 rounded-xl overflow-hidden mt-1"> {/* Added small top margin */}
          {/* You can add content here if needed */}
        </div>
      </div>

        <div className="col-span-2 grid grid-rows-[auto_1fr] gap-2"> {/* Added small gap between rows */}
        {/* Skills, Resume, Experience */}
        <div className="grid grid-cols-3 gap-4">
          {/* Skills */}
          <div className="aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
            <button className="w-full h-full" onClick={() => setIsSkillModalOpen(true)}>
              <img
                src={backgroundImage}
                alt="Skills"
                className="object-cover w-full h-full"
              />
            </button>
          </div>

          {/* Resume */}
          <div className="aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
            <a href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noopener noreferrer">
              <img src={resumeImage} alt="Resume" className="w-full h-full object-cover" />
            </a>
          </div>

          {/* Experience */}
          <div className="aspect-square rounded-xl border-transparent shadow-md overflow-hidden">
            <img src={fresherLogo} alt="Experience" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Projects */}
        <div className="rounded-xl border-transparent shadow-md overflow-hidden h-24"> {/* Fixed height */}
          <button className="relative w-full h-full" onClick={() => setIsModalOpen(true)}>
            <img src={setupImage} alt="Setup" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl text-white font-bold z-10">
              Projects
            </div>
          </button>
        </div>
      </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="flex flex-col md:flex-row gap-10">
          <ProjectModal setIsModalOpen={setIsModalOpen} />
        </div>
      )}
      {isSkillModalOpen && (
        <div className="flex flex-col md:flex-row gap-10">
          <SkillModal setIsSkillModalOpen={setIsSkillModalOpen} />
        </div>
      )}
    </div>
  );
};

export default BentoLayout;