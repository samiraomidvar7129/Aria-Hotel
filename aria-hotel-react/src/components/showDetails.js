import React from 'react';
import { Link,Routes,Route } from 'react-router-dom';

import {SHOWDETAILE}  from './styled-components/custom-styled'

import RoomDetails from './roomDetails'


const ShowDetails = () => {

  return (
    
  
<SHOWDETAILE >
        <Link to='/roomDetails'>مشاهده جزئیات </Link>

        <Routes>
        <Route path='/roomDetails' element={<RoomDetails/>}></Route>
        </Routes>
    </SHOWDETAILE>
   
    
  )
}

export default ShowDetails;
