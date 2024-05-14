import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {CARD_ITEM, IMG_BODY } from "./styled-components/custom-styled";
// import { fetchRooms } from "../redux/roomsSlice";

import axios from "axios";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/rooms/${id}`)
      .then((response) => {
        setRoom(response.data)
      });
  }, [id]);

 if(!room){
  // return null

  return <p>loading.......</p>
 }

  return (
    <>
       <CARD_ITEM key={room.id}>
              <IMG_BODY>
                <img src={room.img} alt="room" />
              </IMG_BODY>
              <h3>{room.roomNumber}</h3>
              
              <button>رزرو کنید</button>

            </CARD_ITEM>
    </>
  );
};

export default RoomDetails;
