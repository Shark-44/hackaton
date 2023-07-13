// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import CardHome from "../components/CardHome";
import vrp from "../images/jc.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="globHome">
        <img className="imgHome" src={vrp} />
        <CardHome />
      </div>
    </div>
  );
};

export default Home;
