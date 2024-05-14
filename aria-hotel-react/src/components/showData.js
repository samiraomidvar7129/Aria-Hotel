import React from "react";

import {
  SHOWDATAPARENT,
  SHOWDATAITEM,
  ROOM_TEXT,
  ROOMSTITLE,
} from "./styled-components/custom-styled";


const ShowData = () => {
  return (
    <>
      <SHOWDATAPARENT>
        <SHOWDATAITEM>
          <ROOM_TEXT>
            ما مجموعه‌ای از اتاقهای استثنایی را ارائه می‌دهیم که عملکردهای شما
            را برآورده می‌کنند و اقامتی لذت‌بخش را تضمین می‌کنند
          </ROOM_TEXT>
        </SHOWDATAITEM>
       
        <SHOWDATAITEM>
          <ROOMSTITLE className="rooms-title">
            اتاق های محبوب ما که به شما توصیه میکنیم
          </ROOMSTITLE>
        </SHOWDATAITEM>
      </SHOWDATAPARENT>
    </>
  );
};

export default ShowData;
