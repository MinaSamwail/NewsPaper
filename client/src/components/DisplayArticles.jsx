import React from "react";

const DisplayArticles = (articles) => {
  console.log("ART", articles);
  return (
    <div>
      <h2 className="title">{articles}</h2>
    </div>
  );
};

export default DisplayArticles;
