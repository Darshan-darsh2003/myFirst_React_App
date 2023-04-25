import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

export const Mcards = ({ m1, m2, m3, m4, m5 }) => {
  let imgBackground = {
    background:
      ' rgba(0, 0, 0, 0.4)url("https://cdn.wallpapersafari.com/19/31/tSUEz4.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "darken",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="content-box">
        <div className="scroll-content">
          <div className="top-display" style={imgBackground}>
            {/* <img src="images/top-display1.jpg" alt="" /> */}
            <h3>Movies</h3>
            <div className="top-display-text">
              <h2>Deadpool</h2>
              <p>Action,comedy & entertainment</p>
            </div>
            <Link className="top-display-link" to="#">
              See Details
            </Link>
          </div>
          <div className="game-mlist game-list">
            <h4 className="game-list-title">Best Selling Movies</h4>
            <div className="game-tray">
              {m1.map((card, i) => {
                return <Card key={i} card={card} />;
              })}

              <h4 className="game-list-title">New & notable Movies</h4>

              {m2.map((card, i) => {
                return <Card key={i} card={card} />;
              })}

              <h4 className="game-list-title">Top Rated Movies</h4>

              {m3.map((card, i) => {
                return <Card key={i} card={card} />;
              })}

              <h4 className="game-list-title">Unique Movies</h4>

              {m4.map((card, i) => {
                return <Card key={i} card={card} />;
              })}

              <h4 className="game-list-title">Movie Specials</h4>

              {m5.map((card, i) => {
                return <Card key={i} card={card} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
