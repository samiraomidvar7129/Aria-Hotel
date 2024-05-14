import React from 'react';
import room1 from "../imgs/room-imgs/room-3.jpg";
import room2 from "../imgs/room-imgs/room-4.jpg";
import room3 from "../imgs/room-imgs/room-5.jpg";
import { MEMORYPARENT } from "./styled-components/custom-styled";


const Memories = () => {
  return (
    <MEMORYPARENT>
      <div>
      <img src={room1} alt="imgRoom"  className="imgRoom"/>
      </div>
      <div>
      <img src={room2} alt="imgRoom"  className="imgRoom imgRoomCenter"/>
      </div>
      <div>
      <img src={room3} alt="imgRoom"  className="imgRoom"/>
      </div>
    </MEMORYPARENT>
  )
}

export default Memories
