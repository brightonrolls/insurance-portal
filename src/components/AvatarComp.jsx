import React, { useState } from "react";
import {
  Box,
  Menu,
  Avatar,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";

import { useDispatch } from "react-redux";

import { resetData } from "../redux/policySlice";
import { logoutHandler } from "../redux/authSlice";

const settings = ["Logout"];

const AvatarComp = () => {
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar
          alt="Son Goku"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJbaVWMoAIfzN6APlhpLfo_-XWLaI0-CXCw&usqp=CAU"
        />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            onClick={() => {
              handleCloseUserMenu();
              dispatch(resetData());
              dispatch(logoutHandler());
            }}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AvatarComp;
