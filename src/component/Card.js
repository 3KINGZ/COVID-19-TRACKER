import React from "react";

function Card({ imgSrc, imgAlt, data, label }) {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} />
      <div>{data}</div>
      <div className="label ">{label}</div>
    </div>
  );
}

export default Card;
