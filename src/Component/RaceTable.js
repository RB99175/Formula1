import React from "react";
import "../App.css";

const RaceTable = ({ races }) => {
  return (
    <table className="body">
      <tbody>
        <tr>
          <th colspan="0">Race Table</th>
        </tr>
        <tr>
          <th>Season</th>
          <th>Round</th>
          <th>Race Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Circuit</th>
          <th>Locality</th>
          <th>Country</th>
          <th>Information</th>
        </tr>
        {races.map((raceItem, index) => (
          <tr key={index}>
            <td>{raceItem.season}</td>
            <td>{raceItem.round}</td>
            <td>{raceItem.raceName}</td>
            <td>{raceItem.date}</td>
            <td>{raceItem.time}</td>
            <td>{raceItem.Circuit.circuitName}</td>
            <td>{raceItem.Circuit.Location.locality}</td>
            <td>{raceItem.Circuit.Location.country}</td>
            <td>
              <a href={raceItem.url}>Report</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default RaceTable;
