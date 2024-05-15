import React from "react";
import "../styles.css";
import headerImg from "../imgs/img-header/header-1.webp";

import {
  HEADERCONTENT,
  HEADERCONTENTITEM,
  HEADERCONTENTITEMIMG,
  HEADERCONTENTITEMH1,
} from "./styled-components/custom-styled";

const HeaderContent = () => {
  return (
    <HEADERCONTENT>
      <HEADERCONTENTITEM >
        <HEADERCONTENTITEMH1  >
           بهترین انتخاب شما برای  تجربه آسایش و راحتی خانواده
        </HEADERCONTENTITEMH1>

        <h5 style={{marginTop:"50px"}}>همین حالا رزرو کنید و بهترین قیمت را دریافت کنید</h5>
      </HEADERCONTENTITEM>
      <HEADERCONTENTITEM>
        <HEADERCONTENTITEMIMG src={headerImg} alt="imgRoom" />
      
      </HEADERCONTENTITEM>
    </HEADERCONTENT>
  );
};
export default HeaderContent;
