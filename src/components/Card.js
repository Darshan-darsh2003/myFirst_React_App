import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ card }) => {
  return (
    <div className="m-card">
      <img src={card.img} alt="" />
      <div className="properties ">
        <h4 className="app-title">{card.title}</h4>
        <p className="app-type">{card.type}</p>
        <p className="app-fund">{card.fund}</p>
      </div>

      <Link to="#" id="getAbout">
        get
      </Link>
    </div>
  );
};
