import React from "react";
import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <div className="content">
      <div className="menu">
        <div className="main-menu">
          <Link to="/" className="menu-btn">
            <img className="menu-btn-img" src="images/home.svg" alt="" />
            Apps
          </Link>

          <Link to="/games" className="menu-btn">
            <img className="menu-btn-img" src="images/games.svg" alt="" />
            Games
          </Link>

          <Link to="/movies" className="menu-btn">
            <img className="menu-btn-img" src="images/movies.svg" alt="" />
            Movies
          </Link>
        </div>

        <div className="category-menu">
          <h2 className="category-title">Categories</h2>
          <div className="category-buttons">
            <Link to="#" className="category-btn">
              <img src="images/points.svg" alt="" className="category-img" />
              <p className="category-text">Education</p>{" "}
              <img src="images/arrow.svg" alt="" className="category-img" />
            </Link>
            <Link to="#" className="category-btn">
              <img src="images/points.svg" alt="" className="category-img" />
              <p className="category-text">Entertainment</p>{" "}
              <img src="images/arrow.svg" alt="" className="category-img" />
            </Link>
            <Link to="#" className="category-btn">
              <img src="images/points.svg" alt="" className="category-img" />
              <p className="category-text">Lifestyle</p>{" "}
              <img src="images/arrow.svg" alt="" className="category-img" />
            </Link>
            <Link to="#" className="category-btn">
              <img src="images/points.svg" alt="" className="category-img" />
              <p className="category-text">Music </p>{" "}
              <img src="images/arrow.svg" alt="" className="category-img" />
            </Link>
            <Link to="#" className="category-btn">
              <img src="images/points.svg" alt="" className="category-img" />
              <p className="category-text">News and Weather</p>{" "}
              <img src="images/arrow.svg" alt="" className="category-img" />
            </Link>
            <Link to="#" className="category-btn">
              <img src="images/points.svg" alt="" className="category-img" />
              <p className="category-text">Health and Fitness</p>{" "}
              <img src="images/arrow.svg" alt="" className="category-img" />
            </Link>
            <Link to="#" className="category-btn">
              <img src="images/points.svg" alt="" className="category-img" />
              <p className="category-text">Kids and family</p>{" "}
              <img src="images/arrow.svg" alt="" className="category-img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
