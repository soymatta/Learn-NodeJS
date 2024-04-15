import React from "react";
import "./tailwind.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navbar bg-neutral bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="link-primary btn btn-ghost text-m">
          Home
        </Link>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">{props.name}</a>
      </div>
      <div className="navbar-end">
        <Link to="/new" className="link-primary btn btn-ghost text-m">
          New task
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
