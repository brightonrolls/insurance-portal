import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  List,
  AppBar,
  Drawer,
  Divider,
  ListItem,
  Typography,
  IconButton,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";

import AvatarComp from "./AvatarComp";

import "../index.css";
import Logo from "../assets/images/GPTLogo.svg";
import LoginArrow from "../assets/images/Login.svg";
import { logoutHandler } from "../redux/authSlice";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    title: "My Apps",
    link: "#",
  },
  {
    id: 2,
    title: "Quick Quotes",
    link: "#",
  },
  {
    id: 3,
    title: "Products",
    link: "#",
  },
  {
    id: 4,
    title: "Download Forms",
    link: "#",
  },
  {
    id: 5,
    title: "Buy a New Policy",
    link: "/new-policy",
  },
];

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Some CSS
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          // Some CSS
          color: "#000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // Some CSS
          color: "#000",
        },
      },
    },
  },
});

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const state = useSelector((state) => state);
  console.log("STATE", state);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/dashboard">
        <img src={Logo} alt="Logo" style={{ height: "60px" }} />
      </Link>
      <Divider />
      <List>
        {isLoggedIn ? (
          <>
            {navItems.map(({ id, title, link }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <Link to={link} className="header-nav-items">
                    <ListItemText primary={title} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </>
        ) : (
          <>
            {!isLoggedIn && (
              <ListItem>
                <Link to="/login" className="login-btn">
                  <Box
                    mr={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ gap: "5px" }}
                  >
                    <Typography>Login</Typography>
                    <img
                      src={LoginArrow}
                      alt="Arrow"
                      width="18px"
                      height="18px"
                    />
                  </Box>
                </Link>
              </ListItem>
            )}
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <AppBar component="nav">
            <Box
              sx={{ display: { xs: "flex", lg: "block" } }}
              justifyContent="space-between"
              alignItems="center"
            >
              <IconButton
                className="menu-icon"
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  m: 4,
                  display: { sm: "none" },
                  justifyContent: "flex-start",
                }}
              >
                <MenuIcon />
              </IconButton>
              {/* User Login Details */}
              {isLoggedIn && (
                <Box
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ display: { xs: "flex", sm: "none", gap: "10px" } }}
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
                      width: "3px",
                      margin: "0",
                      borderRadius: "3px",
                      backgroundColor: "#073262",
                    }}
                  />
                  <AvatarComp logoutHandler={logoutHandler} />
                </Box>
              )}
            </Box>
          </AppBar>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              padding: "0 20px 0 20px",
              boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
            }}
          >
            {/* LOGO */}
            <Link to="/dashboard">
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ height: "70px", paddingTop: "10px" }}
                />
              </Typography>
            </Link>
            {/* NAV ITEMS */}
            {isLoggedIn ? (
              <>
                <Box
                  sx={{ display: { xs: "none", sm: "block" } }}
                  className="nav-container"
                >
                  {navItems.map(({ id, title, link }) => (
                    <Link key={id} to={link} className="header-nav-items">
                      <Typography
                        sx={{
                          display: { xs: "none", sm: "block" },
                        }}
                      >
                        {title}
                      </Typography>
                    </Link>
                  ))}
                </Box>
                {/* User Login Details */}
                <Box
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ display: { xs: "none", sm: "flex", gap: "10px" } }}
                >
                  <Box className="goku">
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
                  <AvatarComp logoutHandler={logoutHandler} />
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
                    <img
                      src={LoginArrow}
                      alt="Arrow"
                      width="18px"
                      height="18px"
                    />
                  </Box>
                </Link>
              </>
            )}
          </Box>
        </Box>
        {/* Drawer */}
        <Box component="nav">
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Header;
