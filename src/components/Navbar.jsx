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

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalView, setModalView] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("Bob");
  const [dp, setDp] = useState(null);

  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const navs = ["About", "Product", "Contact"];

  // Open the menu
  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowModal(false); // Close modal after successful auth
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Add other navbar elements here */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          className="flex items-center"
        >
          MyApp
          <div className="flex space-x-4 ml-4">
            <Link to="/" className="block md:inline hover:underline">
              Home
            </Link>
            {navs.map((nav) => (
              <Link
                key={nav} // Add a unique key for each link
                to={`/${nav}`} // Use template literal syntax for the `to` prop
                className="block md:inline hover:underline"
              >
                {nav}
              </Link>
            ))}
          </div>
        </Typography>

        {/* SignIn  */}
        {!showModal && (
          <CustomModal
            trigger={
              <Button color="inherit">
                {isAuthenticated ? `Welcome ${name}` : "Sign In"}
              </Button>
            }
            title="Sign In"
            onClose={() => setShowModal(false)}
            onAuthSuccess={handleAuthSuccess}
            setName={setName}
            setDp={setDp}
          />
        )}

        {/* Account Icon */}
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

        {/* Menu */}
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
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
