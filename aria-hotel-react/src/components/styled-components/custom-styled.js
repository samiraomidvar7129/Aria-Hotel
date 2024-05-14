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
height:90vh;
background-color:#4F5A49;
`

export const DATAANDTIME= styled.div`
width:100%;
height:60px;
background-color:#323A2D;

`

/* Navbar Component Styles*/

export const NAVBAR=styled.nav`
width:100%;
height:60px;
background-color:#4F5A49;
margin-bottom:1px;
display:flex;
justify-content:space-around;
align-items:center;
position:fixed;
top:0;
left:0;
right0;
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
width:100px;
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
    border:1px solid silver;
    border-radius:4px;
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
border-bottom:1px solid #E57C23;
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

/*WorkProcessBoxes Component Styles */

export const WorkProcessBoxes_WRAPPER=styled.section`
width:90%;
height:auto;
margin:30px auto;
display:flex;
flex-direction:row-reverse;
justify-content:space-around;
align-items:center
`
export const BOX_1=styled.div`
width:30%;
heght:250px;
padding:10px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`
export const BOX_1_ITEM=styled.div`
width:100%;
heght:auto;
display:flex;
flex-direction:row-reverse;
justify-content:space-around;
align-items:center
`
export const BOX_1_text=styled.p`
font-size:13px;
margin-top:10px;
`
export const BOX_1_ICON=styled.span`
width:10%;
height:100%;
color:#FF5B22;
font-size:30px;
`
export const BOX_1_NUMBER=styled.span`
color:#FF5B22;
font-size:22px
`
export const DESCRIPTION=styled.p`
font-size:14px;
margin-top:12px;
color:#7D7C7C;
text-align:right;
`

export const SHOWDETAILE=styled.div`
width:100%;
height:50px;
color:#ffff;
padding:10px;
border-radius:4px;
text-align:center;
margin-top:12px;
background-color: DodgerBlue;
display:flex;
justify-content:center;
align-items:center
`

export const DETAILELINK=styled.a`
color:#ffff
`

/* Counter Component Styles */

export const COUNTER =styled.section`
width:80%;
height:500px;
margin:300px auto;
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


