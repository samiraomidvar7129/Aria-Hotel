import React from "react";
import Slider from "./slider";
import DataAndTime from "./data&time";
import ShowData from "./showData";
import RoomsList from "./roomsList";
import WorkProcess from "./workProcess";
import Counter from "./counter";
import AdvertisingVideo from "./advertising";

const Home = () => {
  return (
    <div>
      <Slider/>
      <DataAndTime/>
      <ShowData/>
       <RoomsList/>
      <WorkProcess/>
      <Counter/>
      <AdvertisingVideo/>

    </div>
  );
};

export default Home;
