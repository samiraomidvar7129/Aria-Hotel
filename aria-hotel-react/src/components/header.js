import React from 'react';
import styled from 'styled-components';
import hotel from '../imgs/banner/hotel.jpg';

 const SECTION=styled.section`
 width:100%;
 height:100vh;
 border:2px solid red;
 position:relative
 `
 const Div=styled.div`
 
 `


  const Header=()=>{
    return (
        <>
        <SECTION className='header-img'>
         <img src={hotel}></img>
        </SECTION>
        </>
    )

}
export default Header;