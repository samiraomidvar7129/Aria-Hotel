import React from "react";
import "../styles.css";
import headerImg from "../imgs/img-header/header-1.webp";
import { motion  } from "framer-motion";

import {
  HEADERCONTENT,
  HEADERCONTENTITEM,
} from "./styled-components/custom-styled";

const HeaderContent = () => {
  return (
    <HEADERCONTENT>
      <HEADERCONTENTITEM>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            color: "#ffff",
            textAlign: "center",
            fontWeight: "80px",
          }}
          transition={{ delay: 0.3, duration: 2 }}
        >
          بهترین انتخاب شما برای تجربه آسایش و راحتی خانواده
        </motion.h1>

        <motion.h5
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            color: "#ccc",
            textAlign: "center",
            marginTop: "50px",
          }}
          transition={{ delay: 1}}
        >
          همین حالا رزرو کنید و بهترین قیمت را دریافت کنید
        </motion.h5>
      </HEADERCONTENTITEM>
      <HEADERCONTENTITEM>
        <motion.img
          src={headerImg}
          initial={{ y: "-400px" }}
          animate={{
            y: "3px",
            borderRadius: "39% 61% 34% 66% / 65% 18% 82% 35%",
          }}
          transition={{ delay: 0.5, type: "spring" }}
          alt="imgRoom"
        />
      </HEADERCONTENTITEM>
    </HEADERCONTENT>
  );
};
export default HeaderContent;
