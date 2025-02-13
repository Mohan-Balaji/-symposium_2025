import React from "react";
import "./Stars.css"; // Ensure this file contains your provided CSS

const Stars = () => {
  return (
    <>
      <div className="stars">
        {Array.from({ length: 221 }).map((_, index) => (
          <div key={index} className="star"></div>
        ))}
      </div>
      <div className="stars">
        {Array.from({ length: 231 }).map((_, index) => (
          <div key={index} className="star"></div>
        ))}
      </div>
    </>
  );
};

export default Stars;
