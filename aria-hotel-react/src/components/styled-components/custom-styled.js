import styled from 'styled-components';

/* Header Component Styles*/

 export const SECTION=styled.section`
width:100wh;
height:95vh;
position:relative;
margin:0;
z-index:-1;

`
export const SLIDER =styled.div`
width:100%;
height:85vh;
background-color:#4F5A49;
padding:50px;

`

export const DATAANDTIME= styled.div`
width:100%;
height:100px;
background-color:#323A2D;

`



/* HeaderContent Component Styles*/

export const HEADERCONTENT=styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-around;
align-items:center;
margin-top:40px
`

export const HEADERCONTENTITEM=styled.div`
width:50%;
height:90%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;;
overflow:hidden;
padding-right:20px;

`



/* Navbar Component Styles*/

export const NAVBAR=styled.nav`
width:100%;
height:70px;
background-color:#4F5A49;
display:flex;
justify-content:space-around;
align-items:center;
text-align:center;
position:fixed;
top:0;
left:0;
right0;
z-index:1;
padding:20px
`
export const UL=styled.ul`
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
width:80%;
height:100%;
`

/* showData Component Styles */ 

export const SHOWDATAPARENT=styled.div`
width: 100%;
height: auto;
padding: 20px;
margin-top:20px;
display:flex;
justify-centent:center,
align-items:center

`

export const SHOWDATAITEM= styled.div`
width:50%;
height:100%
background-color:#323A2D;
`
export const ROOM_TEXT=styled.h4`
text-align:center;
color:#4F5A49;
word-wrap:wrap;
line-height:32px

`
export const ROOMSTITLE=styled.h4`
text-align:center;
color: #4F5A49;

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
    border-radius:4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 10px 5px 0 0 ;
    padding: 5px;
    background-color:#4F5A49;
    color:#ffff
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

/* WorkProcess  Component Styles*/

export const WorkProcess_PARENT=styled.section`
width:90%;
height:70px;
margin:50px auto;
padding:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center
`
export const WorkProcess_text=styled.h4`
text-align:center;
color:#4F5A49;
`
export const WorkProcess_P=styled.p`
text-align:center;
color:#323A2D;
font-size:16px;
margin-top:20px;
width:70%;
line-height:32px
`


/* Counter Component Styles */

export const COUNTER =styled.section`
width:100%;
height:500px;
margin:300px 0 10px 0 ;
background-color:#4F5A49;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`


/* Memories Component Styles */

export const MEMORYPARENT = styled.section`
width:80%;
height: auto;
margin: -300px auto 0 auto;
display:flex;
justify-content:center;
align-items:center;

`


/* counterContent Component Styles */


export const COUNTERCONTENT=styled.div`
width:100%;
height:auto;
display:flex;
justify-content:center;
align-items:center;
margin-top:50px;
color:#ffff;

`
export const COUNTERCONTENTITEM=styled.div`
width:50%;
height:200px;
display:flex;
justify-content:center;
align-items:center;


`

export const COUNTERCONTENTDIV=styled.div`
width:200px;
height:200px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`


 /* Advertising Component Styles */

 export const ADVERTISING =styled.div`
 width:100%;
 height:150px
 `
 
 /* CommentsSlider Component Styles */


 export const COMMENTS =styled.div`
 width:100%;
 height:100%;
 margin:30px auto;
 overflow:hidden;
 position:relative
 
 `
 export const SWIPERCONTAINER =styled.div`
 width:90%;
 margin:0 auto;
 overflow:hidden;
 
 `

 export const COMMENTSH3=styled.h3`
 display:flex;
justify-content:center;
align-items:center;
padding:20px;
color:#4F5A49;
margin-top:30px

 `

 export const SWIPERWRAPPER=styled.div`
 width:100%;
 height:100%;

 `

 export const SWIPERP=styled.p`
 display:flex;
 justify-content:center;
 align-items:center;
 text-align:justify;
 color:#4F5A49;
 font-size:14px;
 line-height:25px
 `
export const SWIPERPDIV=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:20px
`

export const SWIPERPSPAN=styled.span`
width:50px;
height:50px
`

export const SWIPERPSPANIMG=styled.img`
width:40px;
height:40px;
border-radius:100%;
margin-right:12px;
`
export const SWIPERPSPANUSERNAME=styled.span`
color:#4F5A49;
`

 export const SLIDERBUTTONS=styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 position:relative
 `

 export const PREVBUTTON=styled.span`
 display:flex;
justify-content:center;
align-items:center;
 width:30px;
 height:30px;
 border:1px solid #aaa;
 border-radius:100%;
 margin-left:15px;
  position:absolute;
  bottom:10px;
  left:20px;
  z-index:9999


 `
 export const NEXRBUTTON=styled.span`
 display:flex;
justify-content:center;
align-items:center;
 width:30px;
 height:30px;
 border:1px solid #aaa;
 border-radius:100%;
 margin-left:15px;
  position:absolute;
  bottom:10px;
  right:20px;
  z-index:9999


 `