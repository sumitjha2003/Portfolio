import React from 'react';
import Typical from 'react-typical';
import profileImage from '../assets/profile.jpeg'; // Adjust path as needed
// Adjust path as needed
import { name, skills, title } from '../profileconfig.js';

const ProfileSidebar = (props) => {
  const isDarkMode = props.isDarkMode;

  return (
    <div className="flex flex-col h-full max-h-80 overflow-hidden p-4"
    
    > {/* Added max-h-80 and overflow-hidden */}
      <div className="flex w-full">
        {/* Name and Title with Background Image */}
        <div
          className="flex flex-col w-1/2 justify-center bg-cover bg-center" // Added background styles
        >
          <h2 className={`text-4xl lg:text-4xl font-light text-black`}>I'm</h2>
          <h1 className={`text-6xl font-bold text-black`}>{name}</h1>
          <p className={`text-3xl lg:text-3xl font-light mb-4 text-black`}>{title}</p>

          {/* Typical Component */}
          <div className="overflow-hidden h-24 text-black"> {/* Set a fixed height */}
            <Typical
              steps={skills}
              loop={Infinity}
              wrapper="p"
              className={`text-3xl lg:text-3x}`}
            />
          </div>
        </div>

        {/* Right section for Profile Image */}
        <div className="flex flex-col items-center justify-center w-1/2">
          <img
            src={profileImage} // Replace with actual image URL
            alt="Profile"
            className="w-40 h-40 lg:w-48 lg:h-48 rounded-full mb-4" // Adjust size as needed
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
