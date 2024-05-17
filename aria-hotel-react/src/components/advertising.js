import React from 'react';
import advertise from '../imgs/advertiseGiff/advertiseGiff.gif';
import {ADVERTISING } from "../components/styled-components/custom-styled";
import { Link } from 'react-router-dom';

  
const Advertising = () => {
  return (
    <ADVERTISING>
        <Link to="">
        <img src={advertise} alt='Vinsent Hotel ' title='Vinsent Hotel' width="100%" height="100%"></img>
         </Link>
    </ADVERTISING>
  )
}

export default Advertising;
