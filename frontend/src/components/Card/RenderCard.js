import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { locations as cardLocations } from "../../assets/data/data";
import ImageCard from "./ImageCard";
import CircularProgress from "@mui/material/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";

const RenderCard = ({ searchResults }) => {
  const { t } = useTranslation("body");
  const [initialCards, setInitialCards] = useState(cardLocations.slice(0, 8));
  const [cards, setCards] = useState(initialCards);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef(null);
  const searchedCards = searchResults.length > 0 ? searchResults : cards;
  const [isSearching, setIsSearching] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const hasMore = searchedCards.length < cardLocations.length;

  const handleChangeSort = (newSortValue) => {
    setSortValue(newSortValue.target.value);
    if (newSortValue.target.value === "lowest") {
      setCards(cardLocations.slice().sort((a, b) => a.price - b.price));
    } else if (newSortValue.target.value === "highest") {
      setCards(cardLocations.slice().sort((a, b) => b.price - a.price));
    }
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      setCards([
        ...cards,
        ...cardLocations.slice(cards.length, cards.length + 4),
      ]);
      setIsLoading(false);
    }, 1300);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (
        entry.isIntersecting &&
        !isLoading &&
        searchedCards.length < cardLocations.length
      ) {
        setIsLoading(true);
      }
    }, options);
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [isLoading, searchedCards.length]);

  useEffect(() => {
    setSortValue("Sort by");
  }, []);

  return (
    <Box
      sx={{
        mx: 2,
        textAlign: "left",
        paddingLeft: "4rem",
        paddingRight: "4rem",
        paddingBottom: "65px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            paddingTop: "10px",
          }}
        >
          <Select
            value={sortValue}
            onChange={handleChangeSort}
            style={{
              fontSize: "14px",
              color: "#333",
              display: "flex",
              alignItems: "center",
              width: "150px",
              height: "30px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              color: "var(--body_color)",
            }}
            disableAutoFocusItem
          >
            <option value="Sort by" disabled hidden>
              {t("sortby")}
            </option>
            <MenuItem
              value="lowest"
              style={{ fontSize: "14px", color: "#333" }}
            >
              {t("pricelowtohigh")}
            </MenuItem>
            <MenuItem
              value="highest"
              style={{ fontSize: "14px", color: "#333" }}
            >
              {t("pricehightolow")}
            </MenuItem>
          </Select>
        </Box>
      </Box>
      {isSearching && searchResults.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 5 }}>No result found</Box>
      ) : !isSearching && searchResults.length !== 0 ? (
        <Grid container rowSpacing={3} columnSpacing={3}>
          {searchedCards.map((location) => {
            return (
              <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
                <ImageCard location={location} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <InfiniteScroll
          dataLength={cards.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
              <CircularProgress sx={{ color: "black" }} />
            </Box>
          }
          scrollableTarget="scrollableDiv"
        >
          <Grid container rowSpacing={3} columnSpacing={3}>
            {searchedCards.map((location) => {
              return (
                <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
                  <ImageCard location={location} />
                </Grid>
              );
            })}
          </Grid>
        </InfiniteScroll>
      )}
    </Box>
  );
};

export default RenderCard;
