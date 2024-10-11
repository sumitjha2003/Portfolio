import React, { useState } from 'react';
import BentoLayout from './BentoLayout';
import ProfileSidebar from './ProfileSidebar';
import Footer from './Footer';

const MainContainer = () => {
  // Lift dark mode state to MainContainer
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-700 text-white' : 'text-black'} px-4 lg:px-20`}>
      
      {/* Stacking Profile Sidebar and BentoLayout */}
      <div className="flex flex-col w-full max-w-8xl mx-auto ">
        {/* Profile Sidebar */}
        <div className="rounded-lg p-6"
        
        >
          <ProfileSidebar isDarkMode={isDarkMode} />
        </div>

        {/* BentoLayout Component: Pass dark mode state and toggle function */}
        <div className="rounded-lg p-6">
          <BentoLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>

      {/* Footer */}
      <div className="my-5 lg:my-0 text-black text-2xl">
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
