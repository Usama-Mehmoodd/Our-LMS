import React from "react";
import "./sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faTShirt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideBar({ showCanva }) {
  let dashBoardArr = [
    {
      icon: faHome,
      label: "Home",
      link: "/",
    },
    {
      icon: faUser,
      label: "Profile",
      link: "/profile",
    },
    {
      icon: faTShirt,
      label: "User",
      link: "/user",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="sidebar"
      style={{
        left: showCanva ? "10px" : "-230px",
        
      }}
    >
      <br />

      {dashBoardArr.map((v, i) => (
        <div
          key={v.label + i}
          className="sidebar-data sidebar-hover"
          onClick={() => navigate(v.link)}
          style={{ color: location.pathname === v.link ? "blueviolet" : "" }}
        >
          <FontAwesomeIcon className="icon" icon={v.icon} />
          <span style={{ marginLeft: "20px" }}>{v.label}</span>
        </div>
      ))}
    </div>
  );
}
