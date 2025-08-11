/* eslint-disable no-unused-vars */
import React from "react";
import "./GenreDropdown.css";

const GenreDropdown = ({ genre, setGenre }) => {
  return (
    <>
      <h2 className="header1">Select a Genre :</h2>
      <select
        name="genre"
        id="genre"
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="GK" className="option">
          G.K
        </option>
        <option value="Sports" className="option">
          Sports
        </option>
        <option value="Movies" className="option">
          Movies
        </option>
        <option value="Science" className="option">
          Science
        </option>
        <option value="Maths" className="option">
          Maths
        </option>
      </select>
    </>
  );
};

export default GenreDropdown;
