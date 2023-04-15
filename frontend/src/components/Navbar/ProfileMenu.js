import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Link from "@mui/material/Link";
import "./navbar.css";
import FaceIcon from "@mui/icons-material/Face";
import { logoutUser } from "../../redux/apiRequest";
import { useNavigate } from "react-router-dom";
import { createAxios } from "../../redux/createInstance";
import { logoutSuccess } from "../../redux/authSlice";
import { useTranslation } from "react-i18next";

export default function ProfileMenu() {
  const { t } = useTranslation();
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = user?.accessToken;
  const id = user?._id;
  let axiosJWT = createAxios(user, dispatch, logoutSuccess);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logoutUser(dispatch, id, navigate, accessToken, axiosJWT);
  };

  return (
    <div>
      {user ? (
        <>
          <div
            className="profile-menu"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuRoundedIcon />
            <FaceIcon />
          </div>
          <Menu
            className="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableAutoFocusItem
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
              marginTop: "0.2rem",
            }}
            MenuListProps={{
              style: {
                padding: "2px 0",
              },
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              style: {
                borderRadius: "10px",
              },
            }}
          >
            <MenuItem className="menu-items" onClick={handleClose}>
              {t("hi")}, {user.username}
            </MenuItem>
            <MenuItem className="menu-items" onClick={handleClose}>
              {t("myprofile")}
            </MenuItem>
            <div className="line-menu" />
            <MenuItem className="menu-items" onClick={handleLogout}>
              {t("logout")}
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <div
            className="profile-menu"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuRoundedIcon />
            <AccountCircleRoundedIcon />
          </div>
          <Menu
            className="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableAutoFocusItem
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
              marginTop: "0.2rem",
            }}
            MenuListProps={{
              style: {
                padding: "2px 0",
              },
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              style: {
                borderRadius: "10px",
              },
            }}
          >
            <Link color="inherit" underline="none" href="/login">
              <MenuItem className="menu-items" onClick={handleClose}>
                {t("login")}
              </MenuItem>
            </Link>
            <Link color="inherit" underline="none" href="/signup">
              <MenuItem className="menu-items" onClick={handleClose}>
                {t("signup")}
              </MenuItem>
            </Link>
            <div className="line-menu" />
            <MenuItem className="menu-items" onClick={handleClose}>
              {t("help")}
            </MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}
