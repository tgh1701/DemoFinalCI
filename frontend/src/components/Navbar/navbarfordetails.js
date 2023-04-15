import React from "react";
import "./navbar.css";
import logo from "../../assets/logo/logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import ProfileMenu from "./ProfileMenu";
import DarkMode from "../Theme/DarkMode";

function Navbarfordetails() {
  return (
    <div className="nav-detail">
      <div
        className="nav-bar"
        style={{
          paddingLeft: "13rem",
          paddingRight: "13rem",
          boxShadow: "0 1px 2px rgb(0 0 0 / 9%), 0 4px 12px rgb(0 0 0 / 6%)",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <a className="logo-meow" href="/">
            <img src={logo} alt="logo" className="navbar-logo" />
            <div className="title-logo">MeowBooking</div>
          </a>
        </div>
        <div className="profile-container">
          <div className="">
            <DarkMode />
          </div>
          <div className="lang-icon">
            <LanguageIcon />
          </div>
          <div className="profile-div">
            <ProfileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbarfordetails;
