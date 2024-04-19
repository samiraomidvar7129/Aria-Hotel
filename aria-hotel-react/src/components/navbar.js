import React from 'react';
import '../styles.css'
import {NAVBAR,UL,LI,LOGODIV,LOGO} from './styled-components/custom-styled';
import logo from '../imgs/logo/logo.png';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {BiSearchAlt} from 'react-icons/bi';
import {Link} from "react-router-dom";


const Navbar =()=>{
    return(
        <>
        <NAVBAR>
            <span><AiOutlineUserAdd/></span>
            <span><BiSearchAlt/></span>
            
           <UL>
            <LI>
                <Link className='nav-link' to='/'>خانه</Link>
            </LI>
            <LI>
                <Link className='nav-link' to='rooms'>اتاقها</Link>
            </LI>
            <LI>
                <Link className='nav-link' to='resturant'>رستوران</Link>
            </LI>
            <LI>
                <Link className='nav-link' to='aboutUs'>درباره ما</Link>
            </LI>
            <LI>
                <Link className='nav-link' to='contactUs'>ارتباط با ما</Link>
            </LI>
           </UL>
            <LOGODIV>
                <LOGO src={logo}></LOGO>
            </LOGODIV>
      
        </NAVBAR>

      
        </>
    )
}
export default Navbar;