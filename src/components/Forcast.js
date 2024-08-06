import React from "react";

function Forcast(props) {
  return (
    <div className="Forcast">
      <h1>This Week</h1>
      <img className="weatherIcon" alt="weather icon" src="icon/1.png" />
      <ul>
        <li>monday</li>
        <li>Tuesday</li>
        <li>wednesday</li>
        <li>thursday</li>
        <li>friday</li>
      </ul>
    </div>
  );
}

export default Forcast;
