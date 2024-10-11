import React from 'react';

const getCurrentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <p className="text-base lg:text-lg">
        &copy; {getCurrentYear} Sumit_Kr_Jha
      </p>
    </div>
  );
};

export default Footer;
