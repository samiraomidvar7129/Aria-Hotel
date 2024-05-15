import React from "react";
import "./index.css";
import Home from "./components/home";
import RoomsList from "./components/roomsList";
import Restaurant from "./components/restaurant";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import RoomDetails from "./components/roomDetails";
import { Link, Routes, Route} from "react-router-dom";
import {
  NAVBAR,
  UL,
  LI,
  LOGODIV,
  LOGO,
} from "./components/styled-components/custom-styled";
import logo from "./imgs/logo/logo.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NAVBAR>
        <span>
          <AiOutlineUserAdd />
        </span>
        <span>
          <BiSearchAlt />
        </span>

        <UL>
          <LI>
            <Link className="nav-link" to="/">
              خانه
            </Link>
          </LI>
          <LI>
            <Link className="nav-link" to="rooms">
              اتاقها
            </Link>
          </LI>
          <LI>
            <Link className="nav-link" to="resturant">
              رستوران
            </Link>
          </LI>
          <LI>
            <Link className="nav-link" to="aboutUs">
              درباره ما
            </Link>
          </LI>
          <LI>
            <Link className="nav-link" to="contactUs">
              ارتباط با ما
            </Link>
          </LI>
        </UL>
        <LOGODIV>
          <LOGO src={logo}></LOGO>
        </LOGODIV>
      </NAVBAR>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rooms" element={<RoomsList />}/>
        <Route path="/roomDetails/:id" element={<RoomDetails />}/>
        <Route path="/resturant" element={<Restaurant />}/>
        <Route path="/aboutUs" element={<AboutUs />}/>
        <Route path="/contactUs" element={<ContactUs />}/>
      </Routes>
    </Provider>
  );
};
export default App;
