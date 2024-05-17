import React from "react";
import Slider from "./slider";
import DataAndTime from "./data&time";
import ShowData from "./showData";
import RoomsList from "./roomsList";
import WorkProcess from "./workProcess";
import Counter from "./counter";
import Advertising from "./advertising";
import CommentsSlider from "./comentsSlider";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Slider/>
      <DataAndTime/>
      <ShowData/>
       <RoomsList/>
      <WorkProcess/>
      <Counter/>
      <Advertising/>
      <CommentsSlider/>
      <Footer/>

    </div>
  );
};

export default Home;
