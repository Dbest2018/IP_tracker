import React from "react";
import Path from "../Path/Path.js";
import "./Address.css";

const Address = () => {
  const titles = ["IP ADDRESS", "LOCATION", "TIMEZONE", "ISP"];
  const content = [
    "192.212.174.101",
    "Brooklyn, NY 10001",
    "UTC -05:00",
    "SpaceX Starlink",
  ];
  return (
    <div className="address">
      {titles.map((title, index) => (
        <Path key={index} title={title} content={content[index]} />
      ))}
    </div>
  );
};

export default Address;
