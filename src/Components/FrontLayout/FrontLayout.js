import React from "react";
import "./frontlayout.css";

import TopBar from "../TopBar/TopBar";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import AppContext from "../AppContext";

import Home from "../Home/Home";

import useWindowDimentions from "../UseWindowDimentions";

export default function FrontLayout() {
  const { windowWidth } = useWindowDimentions();

  const [showCanva, setShowCanva] = React.useState(true);
  let [profile, setProfile] = React.useState(false);

  // context

  function handleOffcanva() {
    console.log("we are arriving");
    setShowCanva(!showCanva);
  }
  function handleProfile() {
    console.log("Clicked");
    setProfile(!profile);
  }

  React.useEffect(() => {
    windowWidth < 576 && setShowCanva(false);
    
  }, [windowWidth]);

  return (
    <AppContext.Provider value={{ showCanva: showCanva, handleOffcanva }}>
      <div className="main">
        <div>
          <TopBar
            handleOffcanva={handleOffcanva}
            handleProfile={handleProfile}
            profile={profile}
          />
        </div>
        <div className="sideBar">
          {/* {showCanva && <SideBar showCanva={showCanva}/>} */}
          <SideBar showCanva={showCanva} />
          <div
            className="home"
            style={{
              marginLeft: showCanva ? '250px' : '10px',
              width : showCanva && '1097px' 
            }}
          >
            {/* here is the home div */}
            <Outlet />
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </AppContext.Provider>
  );
}
