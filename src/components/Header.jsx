import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Divider, Typography } from "@mui/material";

import AvatarComp from "./AvatarComp";

import "../index.css";
import Logo from "../assets/images/GPTLogo.svg";
import LoginArrow from "../assets/images/Login.svg";

const navItems = [
  "My Apps",
  "Quick Quotes",
  "Products",
  "Download Forms",
  "Buy a New Policy",
];

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          gap: "20px",
          padding: "0 20px",
          boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
        }}
      >
        {/* LOGO */}
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "70px", paddingTop: "10px" }}
          />
        </Link>

        {/* NAV ITEMS */}
        {isLoggedIn ? (
          <>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item}>{item}</Button>
              ))}
            </Box>
            {/* User Login Details */}
            <Box
              alignItems="center"
              justifyContent="space-between"
              sx={{ display: { xs: "none", sm: "flex", gap: "10px" } }}
            >
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Welcome Son, Goku
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  align="right"
                >
                  Customer
                </Typography>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  backgroundColor: "#073262",
                  width: "3px",
                  borderRadius: "3px",
                }}
              />
              <AvatarComp />
            </Box>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ gap: "5px" }}
              >
                <Typography>Existing Customer Login</Typography>
                <img src={LoginArrow} alt="Arrow" width="18px" height="18px" />
              </Box>
            </Link>
          </>
        )}
      </Box>
    </>
  );
};

export default Header;
