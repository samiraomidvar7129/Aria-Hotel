import styled from 'styled-components';

/* Header Component Styles*/

 export const SECTION=styled.section`
width:100wh;
height:95vh;
position:relative;
margin:0;
z-index:-1;
`
export const HEADERIMG =styled.div`
width:100%;
height:100%;
position:relative
`
export const IMG=styled.img`
display:block;
width:100%;
height:100%;
`


/* Navbar Component Styles*/

export const NAVBAR=styled.nav`
width:100%;
height:60px;
background-color:gray;
position:absolute;
z-index:11;
top:0;
left:0;
display:flex;
justify-content:center;
align-items:center
`
export const UL=styled.ul`
width:80%;
display:flex;
justify-content:center;
align-items:center;
direction:rtl;
`
export const LI=styled.li`
margin-left:30px;
color:#fff;
`
export const LOGODIV=styled.div`
width:20%;
height:auto;
`
export const LOGO=styled.img`
width:100px;
`

/* showData Component Styles */ 

export const SHOWDATAPARENT=styled.div`
width: 100%;
height: auto;
padding: 20px;
margin-top:70px

`
export const ROOM_TEXT=styled.h5`
font-size:12px;
color:#FF5B22;
text-align:right;
margin-right:30px
`
export const ROOMSTITLE=styled.h4`
text-align: right;
padding-top: 20px;
color: #FF5B22;
margin-right:30px
`

/*  roomsList Component Styles */

export const SHOWDATA=styled.div`
width: 100%;
height: auto;
padding: 20px;
`
export const CARDS_PARENT=styled.div`
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 10px
`
export const CARD_ITEM=styled.div`
width: 200px;
    height: 330px;
    -webkit-box-shadow: 12px 11px 39px -29px rgba(66, 68, 90, 1);
    -moz-box-shadow: 12px 11px 39px -29px rgba(66, 68, 90, 1);
    box-shadow: 12px 11px 39px -29px rgba(66, 68, 90, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 10px 5px 0 0 ;
    padding: 5px;
`
export const IMG_BODY=styled.div`
width: 170px;
height: 170px;
`
export const CONTENT_ITEM=styled.div`
width:100%;
color: #fff;
background-color: DodgerBlue;
padding: 10px;
font-family: "Arial";
font-size:15px;
display: flex;
justify-content: space-around;
align-items: center;
`
export const ROOM_FITURES=styled.p`
font-size:10px;
text-align:right
`

/* Services Component Styles*/ 

export const SERVICES=styled.section`
width:90%;
height:100px;
margin:0 auto;
position:relative;
top:-50px;
left:0;
`
export const SERVICES_ITEMS=styled.div`
width:100%;
height:100%;
background-color:#fff;
border:1px solid #FF5B22;
display:flex;
flex-direction:row-reverse;
justify-content:space-around;
align-items:center
`
export const SERVICES_BOX=styled.div`
width:16%;
height:100%;
color:#FF5B22;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
font-size:40px;
padding:10px
`
export const SERVICES_ICONS=styled.span`
width:100%;
heght:100%;
display:flex;
justify-content:center;
align-items:center
`
export const SERVICES_TEXT=styled.h4`
font-size:14px
`
/* WorkProcess  Component Styles*/ 
