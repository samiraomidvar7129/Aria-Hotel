import React from 'react';
import hotel from '../imgs/banner/hotel.jpg';
import Navbar from '../components/navbar';
// import HeaderText from './headerText';
import Services from './services';

import { SECTION,HEADERIMG,IMG} from './styled-components/custom-styled';



  const Header=()=>{
    return (
        <div>
        <SECTION>
          <Navbar/>
         <HEADERIMG>
           <IMG src={hotel}>
           {/* <HeaderText/> */}
           </IMG>
         </HEADERIMG>
        <Services/>
        </SECTION>
        </div>
    )

}
export default Header;