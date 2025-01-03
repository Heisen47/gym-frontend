import React from "react";
import { Link } from "react-router";
import { Drawer } from "vaul";

const HamburgerMenu = ({ handleLinkClick }) => {
  const navs = ["About", "Product"];

  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content
        className="fixed top-0 left-0 right-0 bg-white flex flex-col min-h-16
       outline-none data-[state=open]:animate-in
        data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top 
        data-[state=open]:slide-in-from-top"
      >
        <div className="p-4">
          <div className="mx-auto w-12 h-1.5 rounded-full bg-gray-300 mb-8" />
          <div className="flex justify-center items-center content-center gap-2 pt-4">
            <Link to="/" className="block md:inline" onClick={handleLinkClick}>
              Home
            </Link>
            {navs.map((nav) => (
              <Link
                key={nav}
                to={`/${nav}`}
                className="block md:inline"
                onClick={handleLinkClick}
              >
                 {nav}
              </Link>
            ))}
            <Link to="/admin" className="block md:inline font-sans" onClick={handleLinkClick}>
              Admin
            </Link>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  );
};

export default HamburgerMenu;
