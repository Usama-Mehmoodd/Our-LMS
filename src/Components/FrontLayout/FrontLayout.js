import React from "react";
import "./frontlayout.css";

import TopBar from "../TopBar/TopBar";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import { AppProvider, useApp } from "../context/AppContext";

import useWindowDimentions from "../UseWindowDimentions";

export default function FrontLayout() {
  const { windowWidth } = useWindowDimentions();

  // const [showCanva, setShowCanva] = React.useState(true);
  let [profile, setProfile] = React.useState(false);

  // context

  const { showCanva, toggleCanva } = useApp();

  function handleProfile() {
    console.log("Clicked");
    setProfile(!profile);
  }

  React.useEffect(() => {
    windowWidth < 576 && toggleCanva(false);
  }, [windowWidth]);

  return (
    <div className="main">
      <div>
        <TopBar handleProfile={handleProfile} profile={profile} />
      </div>
      <div className="sideBar">

        <SideBar handleShowCanva={showCanva} />


        <div
          className="home"
          style={{
            marginLeft: showCanva ? "250px" : "10px",
            // width: showCanva && "100%",
          }}
        >
          {/* here is the home div */}
          <Outlet />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
