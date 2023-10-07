import React from 'react';
import hotel from '../imgs/banner/hotel.jpg';
import Navbar from '../components/navbar'
import { SECTION,HEADERIMG,IMG} from './styled-components/custom-styled';



  const Header=()=>{
    return (
        <>
        <SECTION className='header-img'>
          <Navbar/>
         <HEADERIMG>
           <IMG src={hotel}></IMG>
         </HEADERIMG>
        </SECTION>
        </>
    )

}
export default Header;