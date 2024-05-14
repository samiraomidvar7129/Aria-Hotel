import React from "react";
import Navbar from "../components/navbar";
import Services from "../components/services";
import { HEADER } from "./styled-components/custom-styled";

const Header = () => {
  return (
    <div>
      <HEADER>
        <Navbar />
        <Services />
      </HEADER>
    </div>
  );
};
export default Header;
