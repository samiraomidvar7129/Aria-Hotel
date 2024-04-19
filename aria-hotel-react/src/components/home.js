import React from "react";
import hotel from "../imgs/banner/hotel.jpg";
import { IMG } from "../components/styled-components/custom-styled";
import WorkProcess from "./workProcess";

const Home = () => {
  return (
    <div>
      <div>
        <IMG src={hotel}>{/* <HeaderText/> */}</IMG>
      </div>
      <WorkProcess/>
    </div>
  );
};

export default Home;
