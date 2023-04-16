import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { BsGlobe } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useState, useEffect } from "react";

const Footer = ({ marginLeft, marginRight }) => {
  const { t } = useTranslation("footer");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    const language = localStorage.getItem("language") || "en";
    setCurrentLanguage(language);
    changeLanguage(language);
  }, []);

  const toggleLanguage = () => {
    if (currentLanguage === "en") {
      setCurrentLanguage("vi");
      changeLanguage("vi");
    } else {
      setCurrentLanguage("en");
      changeLanguage("en");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        bottom: 0,
        width: "100%",
        borderTop: "1px solid #ddd",
        mt: "2rem",
        backgroundColor: "var(--body_background)",
        color: "var(--body_color)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          pt: "0.5rem",
          pb: "0.5rem",
          marginLeft: `${marginLeft}`,
          marginRight: `${marginRight}`,
        }}
      >
        <Box>
          <Link href="/" underline="none" sx={{ color: "var(--body_color)" }}>
            © 2023 Meowbooking, Inc
          </Link>
        </Box>
        <Box>
          <Button
            onClick={() => toggleLanguage()}
            disableRipple
            sx={{
              "&:hover": {
                backgroundColor: "--body_background",
                boxShadow:
                  "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
                transition: "all 0.2s",
                borderRadius: "1rem",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "var(--body_color)",
              }}
            >
              <BsGlobe size={24} />
            </Box>
            <Box
              sx={{
                ml: "1rem",
                color: "var(--body_color)",
              }}
            >
              {t("lang")}
            </Box>
          </Button>
          <Button
            sx={{
              color: "var(--body_color)",
              "&:hover": {
                backgroundColor: "--body_background",
                boxShadow:
                  "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
                transition: "all 0.2s",
                borderRadius: "1rem",
              },
            }}
            disableRipple
          >
            {" "}
            $ USD{" "}
          </Button>
          <Button
            sx={{
              color: "var(--body_color)",
              "&:hover": {
                backgroundColor: "--body_background",
                boxShadow:
                  "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
                transition: "all 0.2s",
                borderRadius: "1rem",
              },
            }}
            disableRipple
          >
            {t("support")}
          </Button>
          <Box />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
