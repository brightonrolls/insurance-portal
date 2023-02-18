import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Box, Avatar, Toolbar, IconButton, Typography } from "@mui/material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ open, setOpen, handleDrawerOpen, handleDrawerClose }) => {
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Insurance Portal
            </Typography>
          </Toolbar>
          <Box pr={3}>
            <Avatar
              alt="Sonu Goku"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJbaVWMoAIfzN6APlhpLfo_-XWLaI0-CXCw&usqp=CAU"
            />
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
