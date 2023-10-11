import React from 'react';
import '../styles.css'
import {NAVBAR,UL,LI,LOGODIV,LOGO} from './styled-components/custom-styled';
import Home from '../components/home';
import Room from '../components/room';
import Restaurant from './restaurant';
import AboutUs from '../components/aboutUs';
import ContactUs from '../components/contactUs';
import logo from '../imgs/logo/logo.png';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {BiSearchAlt} from 'react-icons/bi';
import { Link,Routes,Route } from 'react-router-dom';


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
                <Link className='nav-link' to='room'>اتاقها</Link>
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
        <div>
             <Routes>
                <Route path='/خانه' element={<Home/>}></Route>
                <Route path='/اتاقها' element={<Room/>}></Route>
                <Route path='/غذاها' element={<Restaurant/>}></Route>
                <Route path='/درباره ما' element={<AboutUs/>}></Route>
                <Route path='/ارتباط باما' element={<ContactUs/>}></Route>
            </Routes>
        </div>
        </>
    )
}
export default Navbar;