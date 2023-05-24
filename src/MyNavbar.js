import React from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header_wrap">
            <h2>To do app</h2>
            <div
              className="nav_wrapper"
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-end",
              }}
            >
              <ul
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                }}
              >
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/add">Add to page</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MyNavbar;
