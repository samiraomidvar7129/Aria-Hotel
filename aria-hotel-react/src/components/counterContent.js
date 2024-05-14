import React from 'react';
import {COUNTERCONTENT,COUNTERCONTENTITEM,COUNTERCONTENTDIV} from "../components/styled-components/custom-styled"

const CounterContent = () => {
  return (
    <div>
       <COUNTERCONTENT>
       <COUNTERCONTENTITEM  > 
          <COUNTERCONTENTDIV>
            <span> خدمات لوکس</span>
            <span>۸۰۰+</span>
          </COUNTERCONTENTDIV>
          <COUNTERCONTENTDIV>
          <span>اتاق های ویژه</span>
            <span>۳۵,۰۰۰+</span>
          </COUNTERCONTENTDIV>
          <COUNTERCONTENTDIV>
          <span> مشتریان ما</span>
            <span>۱,۵M+</span>
          </COUNTERCONTENTDIV>
        </COUNTERCONTENTITEM>
        <COUNTERCONTENTITEM>
          <h4>با تجربه ما به شما سرور می کنیم</h4>
        </COUNTERCONTENTITEM>
        
      </COUNTERCONTENT>
    </div>
  )
}

export default CounterContent;
