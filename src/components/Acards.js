import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

export const Acards = ({ a1, a2, a3, a4, a5, a6, a7 }) => {
  let imgBackground = {
    background:
      ' rgba(0, 0, 0, 0.4)url("https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqf6eGleh8erTqCx5sLMHgqImmJ5Ic6M00dTGbVwVkSWxJySpOG2hgYon3ME2OSth.55sMpepOo8uRk4e8Ks83E4h9yxpXNjm6Hv1UgglL4ztyt_FQMO9Y0Kn5PxjIgilP&h=560")',
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
            <h3>Apps</h3>
            <div className="top-display-text">
              <h2>Microsoft 365</h2>
              <p>Essential tools for productivity</p>
            </div>
            <Link className="top-display-link" to="#">
              See Details
            </Link>
          </div>
          <div className="game-mlist game-list">
            <h4 className="game-list-title">Best selling Apps</h4>
            <div className="game-tray">
              {a1.map((card, i) => {
                return <Card key={i} card={card} />;
              })}

              <h4 className="game-list-title">New Apps</h4>
              {a2.map((card, i) => {
                return <Card key={i} card={card} />;
              })}

              <h4 className="game-list-title">Top Free Apps</h4>
              {a3.map((card, i) => {
                return <Card key={i} card={card} />;
              })}

              <h4 className="game-list-title">Top paid Apps</h4>
              {a4.map((card, i) => {
                return <Card key={i} card={card} />;
              })}

              <h4 className="game-list-title">Utility Apps</h4>
              {a5.map((card, i) => {
                return <Card key={i} card={card} />;
              })}

              <h4 className="game-list-title">Apps Specials</h4>
              {a6.map((card, i) => {
                return <Card key={i} card={card} />;
              })}

              <h4 className="game-list-title">Collections</h4>
              {a7.map((card, i) => {
                return <Card key={i} card={card} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
