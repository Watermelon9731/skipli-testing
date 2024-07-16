/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../services/login.service";
import { loginCheck } from "../utils/helpers/verifyLogin";
import { useFavoriteStore } from "../store/favoriteStore";

const StyledWrapper = styled.div`
  font-family: "Monsterrat", sans-serif;
  background: #8eb69b;
  height: 100vh;
`;

export default function Layout() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { resetFavoriteList } = useFavoriteStore((state) => state);

  const navigate = useNavigate();
  const location = useLocation();

  const open = Boolean(anchorEl);

  useEffect(() => {
    const isLogin = loginCheck();
    if (isLogin) {
      if (location.pathname === "/") return navigate("/data");
      return;
    }
    navigate("/");
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    resetFavoriteList();
    navigate("/");
  };

  return (
    <main>
      <StyledWrapper>
        <Box
          bgcolor={"whitesmoke"}
          color={"gray"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={1}
          paddingLeft={3}
        >
          <Link href="/data" underline="none" color="inherit">
            <Typography sx={{ minWidth: 100 }} fontWeight={500}>
              Github User List
            </Typography>
          </Link>
          {loginCheck() && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
          )}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Link href="/profile" underline="none" color="inherit">
              <MenuItem onClick={handleClose}>
                <Avatar /> Account
              </MenuItem>
            </Link>
            <Divider />
            <Box onClick={handleLogout}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Box>
          </Menu>
        </Box>
        <Outlet />
      </StyledWrapper>
    </main>
  );
}
