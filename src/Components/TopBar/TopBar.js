import React from 'react'
import './topbar.css'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faFileArrowUp,
  faGears,
  faLightbulb,
  faPowerOff,
  faUserCircle,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

const element1 = <FontAwesomeIcon icon={faBars} />;
const element2 = <FontAwesomeIcon icon={faLightbulb} />;
const element3 = <FontAwesomeIcon icon={faBell} />;
const element4 = <FontAwesomeIcon icon={faUserCircle} />;

export default function TopBar({handleOffcanva, handleProfile, profile}) {
  
  let profileArr = [
    {
      icon: faUserEdit,
      link: "/profile",
      label: "edit profile",
    },
    {
      icon: faFileArrowUp,
      link: "/profile",
      label: "productivity",
    },
    {
      icon: faGears,
      link: "/profile",
      label: "settings",
    },
    {
      icon: faPowerOff,
      link: "/profile",
      label: "sign out",
    },
  ];

  const [notice, setNotice] = React.useState(false);

  function handleNotice ()
  {
      setNotice(!notice);
  }


  return (
    <div
    className="topbar"
    style={{ display: "flex", justifyContent: "space-between" }}
  >

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="button-bars">
        <button
          onClick={handleOffcanva}
          style={{
            fontSize: "1.1rem",
            color: "black",
            border: "none",
            outline: "none",
            // border: "1px solid silver",
            cursor: "pointer",
            padding: "5px 10px",
            borderRadius: "5px",
            backgroundColor:'white'
          }}
        >
          {/* {offcanva ? "hide" : "show" } */}
          {element1}
        </button>
      </div>
      <div className="comName">
        <h3>BM-Technologies (L M S)</h3>
      </div>
      <div className="search">
        <input
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "1rem",
            border: "none",
            outline: "none",
            border: "1px solid silver",
          }}
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>
    </div>

    <div
      className="topbarEnd"
      style={{ display: "flex", position: "sticky" }}
    >
      <div className="icon brightness">{element2}</div>
      <div className="icon bell" onClick={handleNotice}>{element3}</div>
      <div className="icon profile" onClick={handleProfile}>
        {element4}

        {profile && (
          <div
            className="profile"
            style={{
              minWidth: "130px",
              minHeight: "100px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              // boxShadow: "0px 0px 4px",
              top: "100%",
              right: "-12%",
              position: "absolute",
              padding: "3px",
              // border: "1px solid black",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            {/* <div className="profile" style={{display:'flex', justifyContent:'space-between', alignItems:'center', border:'1px solid black'}}> */}

            <div style={{ marginBottom: "10px" }}>
              <span>M Jamshed</span>
              <h6>view my profile</h6>
            </div>
            <hr />

            <div>
              {profileArr.map((v, i) => (
                <div
                  key={v.label + 1}
                  className="profileCard"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="profileIcon">
                    <FontAwesomeIcon icon={v.icon} />
                  </div>

                  <div>
                    <Link className="link" to={v.link}>
                      {v.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {notice && (
          <div
          className="notice"
          style={{
            minWidth: "280px",
            minHeight: "280px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            // boxShadow: "0px 0px 4px",
            top: "105%",
            right: "50%",
            position: "absolute",
            padding: "3px",
            // border: "1px solid black",
            borderRadius: "8px",
            backgroundColor: "white",
          }}
          >
             <div>
              {profileArr.map((v, i) => (
                <div
                  key={v.label + 1}
                  className="profileCard"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="profileIcon">
                    <FontAwesomeIcon icon={v.icon} />
                  </div>

                  <div>
                    <Link className="link" to={v.link}>
                      {v.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  </div>
  )
}
