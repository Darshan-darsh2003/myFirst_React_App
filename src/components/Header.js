import React from "react";
import "../assets/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="appication-title">
        <img id="icon" src="../images/app-store.png" alt="" />
        <p className="title-text">App Store</p>
      </div>

      <div className="search-bar">
        <img id="search-icon" src="./images/search.svg" alt="" />
        <input
          type="text"
          placeholder="   Search for games,apps or others"
          className="search"
        />
      </div>

      <div className="profile-container">
        <div
          className="profile"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img className="profile-img" src="./images/user.svg" alt="" />
          <p id="profile-text">User profile</p>
        </div>
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <DropdownList />
      </div>
    </header>
  );
}

function DropdownList() {
  return (
    <div className="sub-profile">
      <div className="user-info">
        <img src="./images/user.svg" alt="" />
        <h3>User Name</h3>
      </div>
      <hr />

      <Link to="#" className="sub-menu-link">
        <img src="./images/profile-menu-img/profile.png" alt="" />
        <p>Edit Profile</p>
        <span className="sp">{">"}</span>
      </Link>

      <Link to="#" className="sub-menu-link">
        <img src="./images/profile-menu-img/setting.png" alt="" />
        <p>Settings & Privacy</p>
        <span className="sp">{">"}</span>
      </Link>
      <Link to="#" className="sub-menu-link">
        <img src="./images/profile-menu-img/help.png" alt="" />

        <p>Help & Support</p>
        <span className="sp">{">"}</span>
      </Link>
      <Link to="#" className="sub-menu-link">
        <img src="./images/profile-menu-img/logout.png" alt="" />

        <p>Logout</p>
        <span className="sp">{">"}</span>
      </Link>
    </div>
  );
}
