import React from "react";
import "./Path.css";

const Path = ({ title, content }) => {
  return (
    <div className="path">
      <div className="path__title">{title}</div>
      <div className="path__content">{content}</div>
    </div>
  );
};

export default Path;
