// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        <div className="text-center md:text-left text-lg font-bold">
          MyApp
        </div>

        <div className="text-center text-sm">
          © 2024 MyApp. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
