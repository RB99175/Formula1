import React from "react";
import "../App.css";

const YearDropDown = ({ seasons, handleUpdate }) => {
  return (
    <select
      className="select"
      onChange={e => {
        e.preventDefault();
        handleUpdate(e.target.value);
      }}
    >
      {seasons.map(seasonItem => (
        <option value={seasonItem.seasons}>{seasonItem.season}</option>
      ))}
    </select>
  );
};

export default YearDropDown;
