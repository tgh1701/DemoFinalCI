import React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ImageCard = ({ location }) => {
  const { t } = useTranslation("body");
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = location.locationImages.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        mt: "20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 10,
          top: 10,
        }}
      >
        <FaRegHeart size={24} color="#fff" />
      </Box>
      {location.locationImages.length && (
        <SwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {location.locationImages.map((step, index) => {
            return (
              <div key={step.id}>
                <Box
                  component="img"
                  sx={{
                    height: 275,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    borderRadius: 1,
                  }}
                  src={step.url}
                  alt={step.id}
                ></Box>
              </div>
            );
          })}
        </SwipeableViews>
      )}
      <Box
        sx={{
          position: "absolute",
          bottom: 100,
          width: "100%",
        }}
      >
        <MobileStepper
          sx={{
            backgroundColor: "transparent",
            "& .MuiMobileStepper-dotActive": {
              backgroundColor: "white",
            },
            "& .MuiMobileStepper-dot": {
              color: "white",
            },
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                borderRadius: 10,
                p: 1,
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "white",
                  boxShadow:
                    "0 1px 2px rgb(0 0 0 / 12%), 0 4px 12px rgb(0 0 0 / 9%)",
                  transition: "all 0.2s",
                },
              }}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                borderRadius: 10,
                p: 1,
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "white",
                  boxShadow:
                    "0 1px 2px rgb(0 0 0 / 12%), 0 4px 12px rgb(0 0 0 / 9%)",
                  transition: "all 0.2s",
                },
              }}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{
            color: "black",
            textDecoration: "none",
            backgroundColor: "var(--body_background)",
            color: "var(--body_color)",
          }}
          to={`/location/${location.id}`}
        >
          <Box sx={{ mt: 2 }}>
            <Typography component="h3">
              {" "}
              {t("location")}: {location.location}
            </Typography>
            <Typography component="h4">
              {" "}
              {t("time")}: {location.days}
            </Typography>
            <Typography component="h5">
              {" "}
              {t("price")}: {location.price}$/{t("night")}
            </Typography>
          </Box>
        </Link>
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {location.isNew ? (
              <React.Fragment>
                <Typography component="h5">{t("new")}</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography component="h5"> {location.rating}</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageCard;
