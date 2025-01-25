import React from "react";
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo and Name */}
        <div className="text-center md:text-left text-2xl font-bold">
          Gym
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook fontSize="large" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram fontSize="large" />
          </a>
        </div>

        {/* Built By Section */}
        <div className="text-center md:text-right">
          <div className="text-sm mb-2">Built by</div>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://www.linkedin.com/in/saptarshi-chakraborty-3031999march/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn fontSize="small" />
            </a>
            <a
              href="https://github.com/Heisen47"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub fontSize="small" />
            </a>

            <a
            href="https://x.com/iWriteCode__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter fontSize="small" />
          </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        © 2025 Gym. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
