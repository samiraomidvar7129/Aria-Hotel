import React from 'react';
import {SERVICES,SERVICES_ITEMS,SERVICES_BOX,SERVICES_ICONS,SERVICES_TEXT} from './styled-components/custom-styled'
import { LiaHotelSolid } from "react-icons/lia";
import { BsCalendar2Event } from "react-icons/bs";
import { BiLogoSlack } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { CiDumbbell } from "react-icons/ci";
import { IoRestaurantOutline } from "react-icons/io5";








const Services=()=>{
    return(
        <SERVICES>
            <SERVICES_ITEMS>
                <SERVICES_BOX>
                   <SERVICES_ICONS><IoRestaurantOutline/></SERVICES_ICONS>
                   <SERVICES_TEXT>رستوران</SERVICES_TEXT>
                </SERVICES_BOX>
                <SERVICES_BOX>
                <SERVICES_ICONS><LiaHotelSolid/></SERVICES_ICONS>
                <SERVICES_TEXT>هتل</SERVICES_TEXT>
                </SERVICES_BOX>
                <SERVICES_BOX>
                    <SERVICES_ICONS><CiDumbbell/></SERVICES_ICONS>
                    <SERVICES_TEXT>باشگاه</SERVICES_TEXT>
                </SERVICES_BOX>
                <SERVICES_BOX>
                    <SERVICES_ICONS><BsShop/></SERVICES_ICONS>
                    <SERVICES_TEXT>فروشگاه</SERVICES_TEXT>
                </SERVICES_BOX>
                <SERVICES_BOX>
                    <SERVICES_ICONS><BsCalendar2Event/></SERVICES_ICONS>
                    <SERVICES_TEXT>رویدادها</SERVICES_TEXT>
                </SERVICES_BOX>
                <SERVICES_BOX>
                    <SERVICES_ICONS><BiLogoSlack/></SERVICES_ICONS>
                    <SERVICES_TEXT>زیبایی</SERVICES_TEXT>
                </SERVICES_BOX>
            </SERVICES_ITEMS>
        </SERVICES>
    )
}
export default Services;