import React from 'react';
import { WorkProcessBoxes_WRAPPER,BOX_1,BOX_1_ITEM, BOX_1_ICON,BOX_1_NUMBER,BOX_1_text,DESCRIPTION} from './styled-components/custom-styled';
import { MdOutlineBedroomChild } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { TbMessage2Search } from "react-icons/tb";





const WorkProcessBoxes=()=>{
    return(
       <WorkProcessBoxes_WRAPPER>
         <BOX_1>
            <BOX_1_ITEM>
                <BOX_1_ICON><MdOutlineBedroomChild/></BOX_1_ICON>
                <BOX_1_NUMBER>1</BOX_1_NUMBER>
            </BOX_1_ITEM>
                <BOX_1_text>اتاق مورد نظر خود را جستجو کنید</ BOX_1_text>
                <DESCRIPTION> از منوی جستجو تعداد اتاق و نفرات را جستجو کنید</DESCRIPTION>
         </BOX_1>
         <BOX_1>
            <BOX_1_ITEM>
                <BOX_1_ICON><GoChecklist/></BOX_1_ICON>
                <BOX_1_NUMBER>2</BOX_1_NUMBER>
            </BOX_1_ITEM>
                <BOX_1_text>اتاق  خود را رزرو کنید </ BOX_1_text>
                <DESCRIPTION>با ورود به بخش رزرو اتاق را برای تاریخ موردنظر خود رزرو کنید</DESCRIPTION>
         </BOX_1>
         <BOX_1>
             <BOX_1_ITEM>
               <BOX_1_ICON><TbMessage2Search/></BOX_1_ICON>
               <BOX_1_NUMBER>3</BOX_1_NUMBER>
            </BOX_1_ITEM>
                <BOX_1_text> عملیات پرداخت را انجام دهید</ BOX_1_text>
                <DESCRIPTION>به بخش پرداخت رفته و هزینه ها را واریز نمایید</DESCRIPTION>
         </BOX_1>
       </WorkProcessBoxes_WRAPPER>
    )
}
export default WorkProcessBoxes;