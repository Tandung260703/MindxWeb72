import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartBadge from "~/components/CartBadge";

const settings = [
  {
    key: "PROFILE",
    name: "Profile",
    path: "/user/profile",
  },
  {
    key: "DASHBOARD",
    name: "Admin",
    path: "/admin",
  },
  {
    key: "LOGOUT",
    name: "Logout",
    path: "#",
  },
];

function UserControl() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleNavigate = (key, path) => {
    switch (key) {
      case "PROFILE":
      case "DASHBOARD": {
        navigate(path);
        break;
      }
      case "LOGOUT": {
        localStorage.removeItem("CURRENT_USER");
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("REFRESH_TOKEN");
        navigate("/");
        break;
      }
      default:
        break;
    }
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <CartBadge></CartBadge>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/images/avt.png" />
          </IconButton>
        </Tooltip>
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
              key={setting.key}
              onClick={() => handleNavigate(setting.key, setting.path)}
            >
              <Typography textAlign="center">{setting.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
}

export default UserControl;
