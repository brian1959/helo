import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-bar">
      <div className="nar-bar-holder">
        <div className="nav-b">
          Hi, its me
          <Link to="/dashboard">
            <button className="nav-item">Home</button>
          </Link>
          <Link to="/new">
            <button className="nav-item">New Post</button>
          </Link>
          <Link to="/">
            <button className="nav-item">Log out</button>
          </Link>
          <a href="http://localhost:3045/auth/logout">
            <button>log out</button>
          </a>
        </div>
      </div>
    </div>
  );
}
