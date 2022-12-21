import "./online.css";

import React from "react";

export default function Online({ user }) {
  return (
    <li className="rightbar-friend">
      <div className="rightbar-img-container">
        <img
          src={user.profilePicture}
          alt=""
          className="rightbar-profile-img"
        />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  );
}
