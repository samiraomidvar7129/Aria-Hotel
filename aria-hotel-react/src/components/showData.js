import React from 'react';
import RoomsList from './roomsList';
import {SHOWDATAPARENT,ROOM_TEXT,ROOMSTITLE} from './styled-components/custom-styled'

const ShowData = () => {
    return ( 
        <>
        <SHOWDATAPARENT >
            <ROOM_TEXT>اتاقها</ROOM_TEXT>
            <ROOMSTITLE className='rooms-title'>  اتاق موردنظر خود را انتخاب کنید</ROOMSTITLE>
           <RoomsList/>
         </SHOWDATAPARENT>
        </>
     );
}
 
export default  ShowData;