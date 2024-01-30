import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Landing.css";

const Landing = () => {
  return (
    <section className="landing">
      <img
        className="landing_img"
        src="https://cdn-icons-png.freepik.com/512/8708/8708467.png"
        alt=""
      />
      <NavLink to="/home">
        <button className="landing_button">Get in!</button>
      </NavLink>
    </section>
  );
};

export default Landing;
