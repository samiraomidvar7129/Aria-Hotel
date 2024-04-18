import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchRooms} from '../redux/roomsSlice';
import{CARDS_PARENT,CARD_ITEM,IMG_BODY} from './styled-components/custom-styled';
import WorkProcess from './workProcess';
import ShowDetails from './showDetails'


const RoomsList = () => {

   const roomsList=useSelector((state)=>state.rooms.roomsList);
   const dispatch=useDispatch();


   useEffect(()=>{
      dispatch(fetchRooms());
   },[dispatch]);


    return ( 
        <>
            <CARDS_PARENT >
                  {
                     roomsList.map(room=>{
                        return(
                           <CARD_ITEM key={room.id}>
                              <IMG_BODY >
                                 <img src={room.img} alt='room'/>
                              </IMG_BODY>
                              

                              <ShowDetails/>
                           {/* <span>{room.roomNumber} : شماره اتاق </span>
                           <CONTENT_ITEM>
                           <span>{room.beds} : تعداد تخت </span>
                           <span>{room.capacity}:  ظرفیت </span>
                           </CONTENT_ITEM>
                           <ROOM_FITURES> امکانات اتاق : &nbsp;&nbsp;{room.amenities}  </ROOM_FITURES> */}
                        </CARD_ITEM>
                        )
                     })
                     
                  }
               
               </CARDS_PARENT>
               <WorkProcess/>

        </>
     );
}
 
export default  RoomsList;