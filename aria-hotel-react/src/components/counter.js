import React from "react";
import Memories from './memories';
import CounterContent from "./counterContent";
import { COUNTER } from "./styled-components/custom-styled";

const Counter = () => {
  return (
    <COUNTER>
      <Memories/>
     <CounterContent/>
    </COUNTER>
  );
};

export default Counter;
