import React from "react";
import { Link } from "react-router-dom";
import { SHOWDETAILE } from "./styled-components/custom-styled";


const ShowDetails = () => {
  return (
    <SHOWDETAILE>
      <Link to="/RoomDetails/1">مشاهده جزئیات </Link>
    </SHOWDETAILE>
  );
};

export default ShowDetails;
