import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AvatarComp from "./AvatarComp";

import "../index.css";
import Logo from "../assets/images/GPTLogo.svg";

const drawerWidth = 240;
const navItems = [
  "My Apps",
  "Quick Quotes",
  "Products",
  "Download Forms",
  "Buy a New Policy",
];

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Some CSS
          backgroundColor: "#fff",
          color: "#000",
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

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={Logo} alt="Logo" style={{ height: "60px" }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar component="nav">
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
          <Box
            sx={{
              padding: "0 20px 0 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
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
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item}>{item}</Button>
              ))}
            </Box>
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
          </Box>
        </AppBar>
        {/* Drawer */}
        <Box component="nav">
          <Drawer
            container={container}
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
      </Box>
    </ThemeProvider>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
