// import React from 'react'
// import './topbar.css'

// import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faBell,
//   faFileArrowUp,
//   faGears,
//   faLightbulb,
//   faPowerOff,
//   faUserCircle,
//   faUserEdit,
// } from "@fortawesome/free-solid-svg-icons";

// const element1 = <FontAwesomeIcon icon={faBars} />;
// const element2 = <FontAwesomeIcon icon={faLightbulb} />;
// const element3 = <FontAwesomeIcon icon={faBell} />;
// const element4 = <FontAwesomeIcon icon={faUserCircle} />;

// export default function TopBar({handleOffcanva, handleProfile, profile}) {
  
//   let profileArr = [
//     {
//       icon: faUserEdit,
//       link: "/profile",
//       label: "edit profile",
//     },
//     {
//       icon: faFileArrowUp,
//       link: "/profile",
//       label: "productivity",
//     },
//     {
//       icon: faGears,
//       link: "/profile",
//       label: "settings",
//     },
//     {
//       icon: faPowerOff,
//       link: "/profile",
//       label: "sign out",
//     },
//   ];

//   const [notice, setNotice] = React.useState(false);

//   function handleNotice ()
//   {
//       setNotice(!notice);
//   }


//   return (
//     <div
//     className="topbar"
//     style={{ display: "flex", justifyContent: "space-between" }}
//   >

//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div className="button-bars">
//         <button
//           onClick={handleOffcanva}
//           style={{
//             fontSize: "1.1rem",
//             color: "black",
//             border: "none",
//             outline: "none",
//             // border: "1px solid silver",
//             cursor: "pointer",
//             padding: "5px 10px",
//             borderRadius: "5px",
//             backgroundColor:'white'
//           }}
//         >
//           {/* {offcanva ? "hide" : "show" } */}
//           {element1}
//         </button>
//       </div>
//       <div className="comName">
//         <h3>BM-Technologies (L M S)</h3>
//       </div>
//       <div className="search">
//         <input
//           style={{
//             padding: "10px 20px",
//             borderRadius: "5px",
//             fontSize: "1rem",
//             border: "none",
//             outline: "none",
//             border: "1px solid silver",
//           }}
//           type="search"
//           name="search"
//           placeholder="Search"
//         />
//       </div>
//     </div>

//     <div
//       className="topbarEnd"
//       style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "sticky" }}
//     >
//       <div className="icon brightness">{element2}</div>
//       <div className="icon bell" onClick={handleNotice}>{element3}</div>
//       <div className="icon profile" onClick={handleProfile}>
//         {element4}

//         {profile && (
//           <div
//             className="profile"
//             style={{
//               minWidth: "130px",
//               minHeight: "100px",
//               boxShadow:
//                 "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
//               // boxShadow: "0px 0px 4px",
//               top: "100%",
//               right: "0%",
//               position: "absolute",
//               padding: "3px",
//               // border: "1px solid black",
//               borderRadius: "8px",
//               backgroundColor: "white",
//             }}
//           >
//             {/* <div className="profile" style={{display:'flex', justifyContent:'space-between', alignItems:'center', border:'1px solid black'}}> */}

//             <div style={{ marginBottom: "10px" }}>
//               <span>Usama Khalid</span>
//               <h6>view my profile</h6>
//             </div>
//             <hr />

//             <div>
//               {profileArr.map((v, i) => (
//                 <div
//                   key={v.label + 1}
//                   className="profileCard"
//                   style={{ display: "flex", justifyContent: "space-between" }}
//                 >
//                   <div className="profileIcon">
//                     <FontAwesomeIcon icon={v.icon} />
//                   </div>

//                   <div>
//                     <Link className="link" to={v.link}>
//                       {v.label}
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         {notice && (
//           <div
//           className="notice"
//           style={{
//             minWidth: "280px",
//             minHeight: "280px",
//             boxShadow:
//               "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
//             // boxShadow: "0px 0px 4px",
//             top: "105%",
//             right: "50%",
//             position: "absolute",
//             padding: "3px",
//             // border: "1px solid black",
//             borderRadius: "8px",
//             backgroundColor: "white",
//           }}
//           >
//              <div>
//               {profileArr.map((v, i) => (
//                 <div
//                   key={v.label + 1}
//                   className="profileCard"
//                   style={{ display: "flex", justifyContent: "space-between" }}
//                 >
//                   <div className="profileIcon">
//                     <FontAwesomeIcon icon={v.icon} />
//                   </div>

//                   <div>
//                     <Link className="link" to={v.link}>
//                       {v.label}
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         )}
//       </div>
//     </div>
//   </div>
//   )
// }


import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faFileArrowUp,
  faGears,
  faLightbulb,
  faPowerOff,
  faUserCircle,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import './topbar.css';

export default function TopBar({ handleOffcanva, handleProfile, profile }) {
  const [notice, setNotice] = useState(false);
  const topbarEndRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (topbarEndRef.current && !topbarEndRef.current.contains(e.target)) {
        setNotice(false);
        // If you want the parent to close profile too, you can call handleProfile here
        // when profile is open and click is outside:
        if (profile) handleProfile();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profile, handleProfile]);

  const handleNotice = () => {
    setNotice((prev) => !prev);
    if (profile) handleProfile(); // close profile when opening notifications
  };

  const handleProfileClick = () => {
    handleProfile();
    setNotice(false);
  };

  const profileArr = [
    { icon: faUserEdit, link: '/profile', label: 'Edit Profile' },
    { icon: faFileArrowUp, link: '/profile', label: 'Productivity' },
    { icon: faGears, link: '/profile', label: 'Settings' },
    { icon: faPowerOff, link: '/profile', label: 'Sign Out' },
  ];

  const noticeArr = [
    { icon: faBell, link: '/notifications', label: 'New message from Sara' },
    { icon: faFileArrowUp, link: '/notifications', label: 'Weekly report ready' },
    { icon: faUserEdit, link: '/notifications', label: 'Profile updated' },
  ];

  return (
    <div className="topbar">
      {/* ---------- Left Section ---------- */}
      <div className="topbar-start">
        <button className="menu-btn" onClick={handleOffcanva} aria-label="Toggle menu">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="comName">
          <h3>BM-Technologies (L M S)</h3>
        </div>

        <div className="search">
          <input type="search" name="search" placeholder="Search..." />
        </div>
      </div>

      {/* ---------- Right Section ---------- */}
      <div className="topbarEnd" ref={topbarEndRef}>
        {/* Theme / Brightness */}
        <div className="icon-btn brightness" title="Toggle theme">
          <FontAwesomeIcon icon={faLightbulb} />
        </div>

        {/* Notifications */}
        <div className="icon-btn bell" onClick={handleNotice} title="Notifications">
          <FontAwesomeIcon icon={faBell} />
          {/* <span className="badge">3</span> */}

          {notice && (
            <div className="dropdown notice-dropdown">
              <div className="dropdown-header">
                <h4>Notifications</h4>
                <button className="mark-read" type="button">
                  Mark all read
                </button>
              </div>
              <div className="dropdown-body">
                {noticeArr.map((v, i) => (
                  <Link
                    key={`${v.label}-${i}`}
                    to={v.link}
                    className="dropdown-item"
                    onClick={() => setNotice(false)}
                  >
                    <div className="item-icon">
                      <FontAwesomeIcon icon={v.icon} />
                    </div>
                    <div className="item-text">
                      <span className="item-label">{v.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="dropdown-footer">
                <Link to="/notifications" className="view-all">
                  View all notifications
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="icon-btn profile" onClick={handleProfileClick} title="Profile">
          <FontAwesomeIcon icon={faUserCircle} />

          {profile && (
            <div className="dropdown profile-dropdown">
              <div className="profile-header">
                <div className="profile-avatar-sm">
                  <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <div className="profile-header-text">
                  <span className="profile-name">Usama Khalid</span>
                  <Link to="/profile" className="profile-link">
                    View my profile
                  </Link>
                </div>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-body">
                {profileArr.map((v, i) => (
                  <Link
                    key={`${v.label}-${i}`}
                    to={v.link}
                    className="dropdown-item"
                    onClick={() => handleProfile()}
                  >
                    <div className="item-icon">
                      <FontAwesomeIcon icon={v.icon} />
                    </div>
                    <div className="item-text">
                      <span className="item-label">{v.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


