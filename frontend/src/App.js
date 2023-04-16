import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RenderCard from "./components/Card/RenderCard";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const handleFilter = (filterType) => {
    setFilterBy(filterType);
  };

  const handleSearchArray = (searchResults) => {
    setSearchResults(searchResults);
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
  };

  return (
    <div className="App">
      <Navbar
        onSearchArray={handleSearchArray}
        onSort={handleSort}
        onFilter={handleFilter}
      />
      <RenderCard
        searchResults={searchResults}
        sortBy={sortBy}
        filterBy={filterBy}
      />
      <Footer marginLeft="5rem" marginRight="5rem" />
    </div>
  );
}

export default App;
