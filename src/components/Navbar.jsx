import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router";
import { CustomModal } from "./CustomModal";
import { googleLogout } from "@react-oauth/google";
import MenuIcon from "@mui/icons-material/Menu";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HamburgerMenu from "./HamburgerMenu";
import { Drawer } from "vaul";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("Bob");
  const [dp, setDp] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const navs = ["About", "Product"];

  //drawer settings for mobile
  const handleLinkClick = () => {
    setOpen(!open); // Close drawer
  };

  // Open the menu
  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
  const handleCloseUserMenu = (setting) => {
    setAnchorEl(null);
    if (setting === "Logout") {
      googleLogout();
      setIsAuthenticated(false);
      setDp(null);
    }
  };

  //Auth success
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowModal(false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#373A40",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className="z-50 bg-primary">
        <Toolbar className="bg-primary">
          <span className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            <Link to="/" className="block md:inline hover:underline">
              <motion.div
                initial={{ opacity: 0, y: -50 }} // Start off-screen to the top
                animate={{ opacity: 1, y: 0 }} // Slide into view
                transition={{ duration: 0.5 }} // Control animation speed
                className="flex flex-col"
              >
                <FitnessCenterIcon className="h-8 w-8" />
              </motion.div>
            </Link>
          </span>

          {/* Hamburger Icon */}
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start off-screen to the top
            animate={{ opacity: 1, y: 0 }} // Slide into view
            transition={{ duration: 0.5 }} // Control animation speed
            className="flex flex-col"
          >
            <Drawer.Root
              direction="top"
              open={open}
              onOpenChange={handleLinkClick}
            >
              <Drawer.Trigger asChild>
                <button className="block md:hidden focus:outline-none">
                  <MenuIcon className="h-8 w-8" />
                </button>
              </Drawer.Trigger>
              <HamburgerMenu handleLinkClick={handleLinkClick} />
            </Drawer.Root>
          </motion.div>

          {/* Add other navbar elements here */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            className="flex items-center justify-center"
          >
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}
            >
              <Link to="/" className="block md:inline font-sans">
                <motion.div
                  initial={{ opacity: 0, y: -50 }} // Start off-screen to the top
                  animate={{ opacity: 1, y: 0 }} // Slide into view
                  transition={{ duration: 0.5 }} // Control animation speed
                  className="flex flex-col"
                >
                  Home
                </motion.div>
              </Link>
              {navs.map((nav) => (
                <Link
                  key={nav}
                  to={`/${nav}`}
                  className="block md:inline font-sans"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -50 }} // Start off-screen to the top
                    animate={{ opacity: 1, y: 0 }} // Slide into view
                    transition={{ duration: 0.5 }} // Control animation speed
                    className="flex flex-col"
                  >
                    {nav}
                  </motion.div>
                </Link>
              ))}

              <Link to="/admin" className="block md:inline font-sans">
                <motion.div
                  initial={{ opacity: 0, y: -50 }} // Start off-screen to the top
                  animate={{ opacity: 1, y: 0 }} // Slide into view
                  transition={{ duration: 0.5 }} // Control animation speed
                  className="flex flex-col"
                >
                  Admin
                </motion.div>
              </Link>
            </div>
          </Typography>

          {/* SignIn  */}
          {!isAuthenticated && (
            <CustomModal
              trigger={
                <Button color="inherit">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }} // Start off-screen to the right
                    animate={{ opacity: 1, y: 0 }} // Slide into view
                    transition={{ duration: 0.5 }} // Control animation speed
                    className="flex flex-col"
                  >
                    <span className="inline-block text-center">
                      {isAuthenticated ? `Welcome ${name}` : <PersonIcon />}
                    </span>
                  </motion.div>
                </Button>
              }
              title="Sign In"
              onClose={() => setShowModal(false)} // Handles modal close
              onAuthSuccess={handleAuthSuccess} // Handles authentication success
              setName={setName}
              setDp={setDp}
            />
          )}

          {/* Display Welcome Message if Authenticated */}
          {isAuthenticated && (
            <span
              color="inherit"
              className="hidden md:inline"
            >{`Welcome ${name}!`}</span>
          )}

          {/* Account Icon */}
          {isAuthenticated && (
            <IconButton onClick={handleOpenUserMenu} color="inherit">
              {dp ? (
                <img
                  src={dp}
                  alt="user"
                  style={{ width: 40, height: 40, borderRadius: "50%" }} // Styling for a circular avatar
                />
              ) : (
                <AccountCircleIcon />
              )}
            </IconButton>
          )}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseUserMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => handleCloseUserMenu(setting)}
              >
                <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;
