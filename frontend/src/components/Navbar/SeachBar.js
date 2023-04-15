import React, { useState } from "react";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleCheckInChange(event) {
    setCheckIn(event.target.value);
  }

  function handleCheckOutChange(event) {
    setCheckOut(event.target.value);
  }

  function handleGuestsChange(event) {
    setGuests(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <div className="bar">
      <div className="location">
        <p>Location</p>
        <input
          className="input-search"
          type="text"
          placeholder="Where are you going?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="check-in">
        <p>Check in</p>
        <input
          className="input-search"
          type="text"
          placeholder="Add dates"
          value={checkIn}
          onChange={handleCheckInChange}
        />
      </div>
      <div className="check-out">
        <p>Check out</p>
        <input
          className="input-search"
          type="text"
          placeholder="Add dates"
          value={checkOut}
          onChange={handleCheckOutChange}
        />
      </div>
      <div className="guests">
        <p>Guests</p>
        <input
          className="input-search"
          type="text"
          placeholder="Add guests"
          value={guests}
          onChange={handleGuestsChange}
        />
        <span>
          <i className="lni lni-search-alt" onClick={handleSearch}></i>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
