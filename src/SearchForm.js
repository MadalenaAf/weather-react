import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form class="form-inline" id="search-form">
      <label for="City">City: </label>
      <input
        type="search"
        id="city-input"
        placeholder="Type a city..."
        autocomplete="off"
        class="form-control"
      />
      <input type="Submit" id="search" value="Search" />
    </form>
  );
}
