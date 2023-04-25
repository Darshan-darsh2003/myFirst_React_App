import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

export const Cards = ({ g1, g2, g3, g4, g5, g6, g7 }) => {
  let imgBackground = {
    background:
      ' rgba(0, 0, 0, 0.4)url("https://wallpaperaccess.com/full/8077808.jpg")',
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
            <h3>Games</h3>
            <div className="top-display-text">
              <h2>Battlefield contest</h2>
              <p>Action & Adventure </p>
            </div>
            <Link className="top-display-link" to="#">
              See Details
            </Link>
          </div>
          <div className="game-mlist game-list">
            <h4 className="game-list-title">Best Selling Games</h4>
            <div className="game-tray">
              {g1.map((card) => {
                return <Card card={card} />;
              })}

              <h4 className="game-list-title">New & notable PC games</h4>
              {g2.map((card) => {
                return <Card card={card} />;
              })}

              <h4 className="game-list-title">Top Free Games</h4>
              {g3.map((card) => {
                return <Card card={card} />;
              })}

              <h4 className="game-list-title">Top paid games</h4>
              {g4.map((card) => {
                return <Card card={card} />;
              })}

              <h4 className="game-list-title">Apps for gamers</h4>
              {g5.map((card) => {
                return <Card card={card} />;
              })}

              <h4 className="game-list-title">Games Specials</h4>
              {g6.map((card) => {
                return <Card card={card} />;
              })}

              <h4 className="game-list-title">Collections</h4>
              {g7.map((card) => {
                return <Card card={card} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
