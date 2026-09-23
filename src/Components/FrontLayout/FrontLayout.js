// import React from "react";
// import "./frontlayout.css";

// import TopBar from "../TopBar/TopBar";
// import { Outlet } from "react-router-dom";
// import SideBar from "../SideBar/SideBar";
// import Footer from "../Footer/Footer";
// import { AppProvider, useApp } from "../context/AppContext";

// import useWindowDimentions from "../UseWindowDimentions";

// export default function FrontLayout() {
//   const { windowWidth } = useWindowDimentions();

//   // const [showCanva, setShowCanva] = React.useState(true);
//   let [profile, setProfile] = React.useState(false);

//   // context

//   const { showCanva, toggleCanva } = useApp();

//   function handleProfile() {
//     console.log("Clicked");
//     setProfile(!profile);
//   }

//   React.useEffect(() => {
//     windowWidth < 576 && toggleCanva(false);
//   }, [windowWidth]);

//   return (
//     <div className="main">
//       <div>
//         <TopBar handleProfile={handleProfile} profile={profile} />
//       </div>
//       <div className="sideBar">

//         <SideBar handleShowCanva={showCanva} />


//         <div
//           className="home"
//           style={{
//             marginLeft: showCanva ? "250px" : "10px",
//             // width: showCanva && "100%",
//           }}
//         >
//           {/* here is the home div */}
//           <Outlet />
//         </div>
//       </div>

//       {/* <Footer /> */}
//     </div>
//   );
// }
import React from "react";
import "./frontlayout.css";

import TopBar from "../TopBar/TopBar";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useApp } from "../context/AppContext";

import useWindowDimentions from "../UseWindowDimentions";

const MOBILE_BREAKPOINT = 768;

export default function FrontLayout() {
  const { windowWidth } = useWindowDimentions();
  const isMobile = windowWidth < MOBILE_BREAKPOINT;

  const [profile, setProfile] = React.useState(false);
  const { showCanva, toggleCanva } = useApp();

  function handleProfile() {
    setProfile((prev) => !prev);
  }

  // Collapse the sidebar once when entering mobile size,
  // not on every resize event.
  React.useEffect(() => {
    if (isMobile) toggleCanva(false);
  }, [isMobile]);

  return (
    <div className="main">
      <TopBar handleProfile={handleProfile} profile={profile} />

      <div className="sideBar">
        <SideBar handleShowCanva={showCanva} />

        <div
          className="home"
          style={{
            // On mobile the sidebar overlays the content, so no offset is needed
            marginLeft: !isMobile && showCanva ? "250px" : "10px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}