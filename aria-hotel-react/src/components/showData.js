import React from 'react';
import RoomsList from './roomsList';
import {SHOWDATAPARENT,ROOMSTITLE} from './styled-components/custom-styled'

const ShowData = () => {
    return ( 
        <>
        <SHOWDATAPARENT >
            <ROOMSTITLE className='rooms-title'>لیست اتاقها</ROOMSTITLE>
           <RoomsList/>
         </SHOWDATAPARENT>
        </>
     );
}
 
export default  ShowData;