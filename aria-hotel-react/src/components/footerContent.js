import React from "react";
import {
  FOOTERCONTENT,
  LOGODIV,
  LOGO,
  FOOTERCONTENTITEMS,
  FOOTERLINKS
} from "../components/styled-components/custom-styled";
import logo from "../imgs/logo/logo.svg";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import Conditions from "./conditions";



import {Link} from 'react-router-dom';


const FooterContent = () => {
  return (
    <section>
      <FOOTERCONTENT>
      <FOOTERCONTENTITEMS>
        <LOGODIV>
          <LOGO src={logo}></LOGO>
        </LOGODIV>
      </FOOTERCONTENTITEMS>
      <FOOTERCONTENTITEMS>
       <FOOTERLINKS>
       <Link to=""><IoLogoInstagram/></Link>
        <Link to=""><CiLinkedin/></Link>
        <Link to=""><CiTwitter/></Link>
        <Link to=""><CiFacebook/></Link>
       </FOOTERLINKS>
       <FOOTERLINKS>
       <Link to=""><IoLogoInstagram/></Link>
        <Link to=""><CiLinkedin/></Link>
        <Link to=""><CiTwitter/></Link>
        <Link to=""><CiFacebook/></Link>
       </FOOTERLINKS>
       

      </FOOTERCONTENTITEMS>
    </FOOTERCONTENT>
    <Conditions/>
    </section>
  );
};

export default FooterContent;
