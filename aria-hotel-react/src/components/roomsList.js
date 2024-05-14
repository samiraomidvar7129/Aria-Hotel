import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRooms } from "../redux/roomsSlice";
import { CARD_ITEM, IMG_BODY } from "./styled-components/custom-styled";
import { Link } from "react-router-dom";

const RoomsList = () => {
  const roomsList = useSelector((state) => state.rooms.roomsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {roomsList.map((room) => {
          return (
            <CARD_ITEM key={room.id}>
              <IMG_BODY>
                <img src={room.img} alt="room" />
              </IMG_BODY>

              <Link to={`/roomDetails/${room.id}`}>جزییات اتاقها</Link>
            </CARD_ITEM>
          );
        })}
      </div>
    </>
  );
};

export default RoomsList;
