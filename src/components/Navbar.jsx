import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  Modal,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router";
import { CustomModal } from "./CustomModal";
import { googleLogout } from "@react-oauth/google";
// import logo from "../assets/logo/logo.png";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("Bob");
  const [dp, setDp] = useState(null);

  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const navs = ["About", "Product"];

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

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowModal(false); // Close modal after successful auth
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <span>
          <Link to="/" className="block md:inline hover:underline">
            <FitnessCenterIcon className="h-8 w-8" />
          </Link>
        </span>
        {/* Add other navbar elements here */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          className="flex items-center justify-center"
        >
          <div className="flex space-x-4 ml-4 justify-center items-center">
            <Link to="/" className="block md:inline">
              Home
            </Link>
            {navs.map((nav) => (
              <Link key={nav} to={`/${nav}`} className="block md:inline ">
                {nav}
              </Link>
            ))}
          </div>
        </Typography>
        {/* SignIn  */}
        {!isAuthenticated && (
          <CustomModal
            trigger={
              <Button color="inherit">
                {isAuthenticated ? `Welcome ${name}` : "Sign In"}
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
          <span color="inherit" className="mr-6">{`Welcome ${name}!`}</span>
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
  );
};
export default Navbar;
