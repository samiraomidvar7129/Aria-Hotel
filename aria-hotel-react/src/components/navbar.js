import React from 'react';
import {NAVBAR,UL,LI} from './styled-components/custom-styled';
import Home from '../components/home';
import Room from '../components/room';
import Foods from '../components/foods';
import AboutUs from '../components/aboutUs';
import ContactUs from '../components/contactUs';
import { Link,Routes,Route } from 'react-router-dom';


const Navbar =()=>{
    return(
        <>
        <NAVBAR>
           <UL>
            <LI>
                <Link to='/'>خانه</Link>
            </LI>
            <LI>
                <Link to='room'>اتاقها</Link>
            </LI>
            <LI>
                <Link to='foods'>غذاها</Link>
            </LI>
            <LI>
                <Link to='aboutUs'>درباره ما</Link>
            </LI>
           </UL>
        </NAVBAR>
        <div>
             <Routes>
                <Route path='/خانه' element={<Home/>}></Route>
                <Route path='/اتاقها' element={<Room/>}></Route>
                <Route path='/غذاها' element={<Foods/>}></Route>
                <Route path='/درباره ما' element={<AboutUs/>}></Route>
                <Route path='/تماس باما' element={<ContactUs/>}></Route>
            </Routes>
        </div>
        </>
    )
}
export default Navbar;