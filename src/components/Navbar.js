import React from "react";
import "./navbar.css";
import Chuck from "../img/chuck-norris.png";

const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="check-btn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="logo">
            <img src={Chuck} alt="chuck-img" />
          </label>
          <ul>
            <li>
              <button className="active" href="#">
                Chuck Jokes
              </button>
            </li>
            <li>
              <button href="#">Jokes of the Day</button>
            </li>
            <li>
              <button href="#">Jokes for the night cruise ...</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
