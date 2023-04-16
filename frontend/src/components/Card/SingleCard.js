import React from "react";
import Navbarfordetails from "../Navbar/navbarfordetails";
import { useParams } from "react-router-dom";
import { locations } from "../../assets/data/data";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import {
  BiBed,
  BiBath,
  BiArea,
  BiStar,
  BiKnife,
  BiCar,
  BiTv,
  BiWifi,
  BiCookie,
  BiSwim,
  BiCycling,
  BiCableCar,
  BiCamera,
} from "react-icons/bi";
import ShowMoreText from "react-show-more-text";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";

const SingleCard = () => {
  const { t } = useTranslation("singlecard");
  const { id } = useParams();
  const location = locations.find((loc) => loc.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Box
      sx={{
        backgroundColor: "var(--body_background)",
        color: "var(--body_color)",
        paddingBottom: "65px",
      }}
    >
      <Navbarfordetails />
      <Box sx={{ marginLeft: "13rem", marginRight: "13rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <h2 component="h2">{location.location}</h2>
          <h2
            style={{
              color: "var(--theme)",
            }}
            component="h4"
          >
            ${location.price}
          </h2>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {location.locationImages[0] && (
            <div>
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: "block",
                  overflow: "hidden",
                  width: 805,
                  borderRadius: 1,
                  marginRight: "8px",
                }}
                src={location.locationImages[0].url}
                alt={location.locationImages[0].id}
              ></Box>
            </div>
          )}
          <Box>
            {location.locationImages[1] && (
              <div>
                <Box
                  component="img"
                  sx={{
                    height: 296,
                    display: "block",
                    overflow: "hidden",
                    width: 405,
                    borderRadius: 1,
                    marginBottom: "8px",
                  }}
                  src={location.locationImages[1].url}
                  alt={location.locationImages[1].id}
                ></Box>
              </div>
            )}
            {location.locationImages[2] && (
              <div>
                <Box
                  component="img"
                  sx={{
                    height: 296,
                    display: "block",
                    overflow: "hidden",
                    width: 405,
                    borderRadius: 1,
                  }}
                  src={location.locationImages[2].url}
                  alt={location.locationImages[2].id}
                ></Box>
              </div>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "30px",
          }}
        >
          {" "}
          <Box
            sx={{ display: "flex", alignItems: "center", fontSize: "1.25rem" }}
          >
            <BiStar /> <div> {location.rating}</div>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
              fontSize: "1.25rem",
            }}
          >
            <BiBed /> <div> {location.bedrooms}</div>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
              fontSize: "1.25rem",
            }}
          >
            <BiBath /> <div> {location.bathrooms}</div>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
              fontSize: "1.25rem",
            }}
          >
            <BiArea /> <div> {location.area}m2</div>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "var(--theme)",
              "&:hover": {
                backgroundColor: "#fa1f47",
              },
              marginLeft: "auto",
              borderRadius: "0.75rem",
              fontSize: "1.25rem",
            }}
          >
            {t("booknow")}
          </Button>
        </Box>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100%",
            marginTop: "20px",
          }}
        />
      </Box>
      <Box
        sx={{
          marginLeft: "13rem",
          marginRight: "13rem",
          fontSize: "1.25rem",
        }}
      >
        <h2>{t("about")}</h2>
        <p>
          {t("div1")}
          {location.location}. {t("div2")}
        </p>

        <p>{t("div3")} 🙂</p>
        <ShowMoreText
          lines={3}
          more={t("showmore")}
          less={t("showless")}
          anchorClass="show-more-less-clickable"
          expanded={false}
          width={20}
          truncatedEndingComponent={"... "}
        >
          <h3>{t("space")}</h3>
          <p>
            {t("div4")} {location.location} {t("div5")}
          </p>
          <p>{t("div6")}</p>
          <p>{t("div7")} 🙂</p>
          <h3>{t("div8")}</h3>
          <p>{t("div9")}</p>
          <p>
            {t("div10")}
            <p>{t("div11")}</p>
            <p>{t("div12")}</p>
            <p>{t("div13")}</p>
            <p> {t("div14")} </p>
          </p>
        </ShowMoreText>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100%",
            marginTop: "20px",
          }}
        />
      </Box>
      <Box
        sx={{
          marginLeft: "13rem",
          marginRight: "13rem",
          fontSize: "1.25rem",
        }}
      >
        <h2>{t("offers")}</h2>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <BiWifi />{" "}
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {t("offers1")}
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <BiCar />{" "}
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {t("offers2")}
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <BiTv />{" "}
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {" "}
                {t("offers3")}
              </div>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <BiCookie />
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {t("offers4")}
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <BiSwim />{" "}
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {t("offers5")}
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <BiKnife />{" "}
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {" "}
                {t("offers6")}
              </div>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <BiCamera />{" "}
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {t("offers7")}
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <BiCableCar />{" "}
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {t("offers8")}
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <BiCycling />{" "}
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                {t("offers9")}
              </div>
            </Box>
          </Box>
        </Box>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100%",
            marginTop: "20px",
          }}
        />
      </Box>
      <Box
        sx={{
          marginLeft: "13rem",
          marginRight: "13rem",
          fontSize: "1.25rem",
        }}
      >
        <h2>{t("things")}</h2>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <h3>{t("rules")}</h3>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <div>{t("rules1")}</div>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <div>{t("rules2")}</div>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <div>{t("rules3")}</div>
            </Box>
          </Box>
          <Box>
            <h3>{t("rules4")}</h3>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <div>{t("rules5")}</div>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <div>{t("rules6")}</div>
            </Box>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <div>{t("rules7")}</div>
            </Box>
          </Box>
          <Box>
            <h3>{t("rules8")}</h3>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                marginTop: "5px",
              }}
            >
              <div>{t("rules9")}</div>
            </Box>
          </Box>
        </Box>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100%",
            marginTop: "20px",
          }}
        />
      </Box>
      <Box
        sx={{
          marginLeft: "13rem",
          marginRight: "13rem",
          fontSize: "1.25rem",
        }}
      >
        <h2>{t("review")}</h2>
        <Box>
          <p>{t("review1")}</p>
        </Box>
      </Box>
      <Footer marginLeft="13rem" marginRight="13rem" />
    </Box>
  );
};

export default SingleCard;
