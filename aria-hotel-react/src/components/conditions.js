import React from 'react';
 import { TERMANDCONDITIONS, TERMANDCONDITIONSITEM } from './styled-components/custom-styled';

const Conditions = () => {
  return (
    <TERMANDCONDITIONS >
    <TERMANDCONDITIONSITEM style={{display:"flex",justifyContent:"space-around", alignItems:"center"}}>
      <span>ساعت تحویل اتاق</span>
      <span>ساعت ۱۴ </span>
    </TERMANDCONDITIONSITEM>
    <TERMANDCONDITIONSITEM>
      <span>ساعت تخلیه اتاق</span>
      <span>ساعت ۱۴ </span>
    </TERMANDCONDITIONSITEM>
    <TERMANDCONDITIONSITEM >
      <span> قانون خردسال</span>
      <p>
        هزینه برای اقامت کودکان زیر 3 سال در صورت عدم استفاده از سرویس رایگان
        و بالای 5 سال نفر کامل محاسبه می شود.
      </p>
    </TERMANDCONDITIONSITEM>
    <TERMANDCONDITIONSITEM>
      <span> قانون کنسلی اتاق </span>
      <p>
        تا 48 ساعت قبل از تاریخ ورود جریمه بسته به نظر هتل و بعد از 48 ساعت با
        حداقل یک شب جریمه ابطال خواهد شد.
      </p>
    </TERMANDCONDITIONSITEM>
  </TERMANDCONDITIONS>
  )
}

export default Conditions
