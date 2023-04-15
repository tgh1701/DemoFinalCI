import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo/logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ProfileMenu from "./ProfileMenu";
import FilterTab from "../Filter";
import DarkMode from "../Theme/DarkMode";
import { locations } from "../../assets/data/data";
import { useTranslation } from "react-i18next";

function Navbar(props) {
  const { t } = useTranslation("navbar");
  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState("");

  useEffect(() => {
    if (search) {
      const filterSearch = locations.filter((item) =>
        item.location.toLowerCase().includes(search.toLowerCase())
      );
      setSearchArray(filterSearch);
    } else {
      setSearchArray("");
    }
  }, [search]);

  const handleSearchLocation = (location) => {
    setSearch(location);
  };

  useEffect(() => {
    props.onSearchArray(searchArray);
  }, [searchArray, props]);

  return (
    <div className="nav" style={{ position: "sticky" }}>
      <div>
        <div className="nav-bar">
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
          <div className="search-bar">
            <input
              className="input-search"
              type="text"
              name="search"
              value={search}
              placeholder={t("search")}
              onChange={(e) => {
                handleSearchLocation(e.target.value);
              }}
            />
            <div className="search-icon-div">
              <SearchRoundedIcon className="search-icon" />
            </div>
          </div>
          <div className="profile-container">
            <div className="">
              <DarkMode />
            </div>
            <div className="profile-div">
              <ProfileMenu />
            </div>
          </div>
        </div>
      </div>
      <FilterTab onClick={props.toggleTheme} />
    </div>
  );
}

export default Navbar;
