import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Room from "./components/room";
import Restaurant from "./components/restaurant";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms" element={<Room />}></Route>
          <Route path="/resturant" element={<Restaurant />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
        </Routes>
     

    </Provider>
  );
};
export default App;
