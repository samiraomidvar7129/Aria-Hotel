// import React, {useState, useEffect} from "react";
// import {useParams} from "react-router-dom";
// import { SHOWDETAILE } from "./styled-components/custom-styled";
// import { useState } from "react";
// import axios from "axios";


// const ShowDetails = () => {

//  const {id} = useParams();
//  const [room, setRoom] = useState(null);


//  useEffect(() => {
//     const fetchRoomDetails= async()=>{
//         try{
//             const response= await axios.get(`http://localhost:3000/rooms/${id}`)


//             setRoom(response.data)
//         }catch(error){
//             console.log(error)
//         }
//     }


//     fetchRoomDetails();
//  }, [id])

//  if(!room){
//     return <div>loading......</div>
//  }


//   return (
//     <SHOWDETAILE>
//       <Link to="/Rooms/:id"> رزرو اتاق </Link>
//     </SHOWDETAILE>
//   );
// };

// export default ShowDetails;
