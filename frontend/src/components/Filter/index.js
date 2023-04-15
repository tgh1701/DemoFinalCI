import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { locationsTab } from "../../assets/data/data";
import "./Filter.css";
import { useTranslation } from "react-i18next";

const FilterTab = () => {
  const { t } = useTranslation("data");
  const [value, setValue] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="filter-bar"
      sx={{
        backgroundColor: "var(--body_background)",
        color: "var(--black)",
        "&:hover": {
          color: "var(--black)",
        },
        display: "flex",
        paddingRight: "5rem",
        paddingLeft: "5rem",
        flexGrow: 1,
        alignItems: "center",
        boxShadow: "0 1px 2px rgb(0 0 0 / 12%), 0 4px 12px rgb(0 0 0 / 9%)",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        TabIndicatorProps={{
          style: { display: "none" },
        }}
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
            backgroundColor: "transparent",
            border: "1px solid var(--grey)",
            borderRadius: "50%",
            width: "2.5rem",
            height: "2.5rem",
            "&:hover": {
              backgroundColor: "--body_background",
              boxShadow:
                "0 1px 2px rgb(0 0 0 / 12%), 0 4px 12px rgb(0 0 0 / 9%)",
              transition: "all 0.2s",
            },
          },
          "& .MuiTabs-flexContainer": {
            transition: "none",
          },
          "& .Mui-selected": {
            color: "var(--theme) !important",
          },
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--body_background)",
          color: "var(--body_color)",

          flexGrow: 1,
          pt: "0.4rem",
          pb: "0.4rem",
        }}
      >
        {locationsTab.map((tab) => {
          return (
            <Tab
              sx={{
                backgroundColor: "var(--body_background)",
                color: "var(--body_color)",
              }}
              key={tab.id}
              icon={tab.icon}
              label={t(tab.label)}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default FilterTab;
