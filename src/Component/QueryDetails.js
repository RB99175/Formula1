import React from "react";
import "../App.css";

const QueryDetails = ({ seasons, results }) => {
  return (
    <table class="response">
      <tbody>
        <tr>
          <th>Query Details</th>
        </tr>
        <tr>
          <th>Series</th>
          <th>Season</th>
          <th>Results</th>
        </tr>
        <tr>
          <td>f1</td>
          <td>{seasons}</td>
          <td>{results}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default QueryDetails;
