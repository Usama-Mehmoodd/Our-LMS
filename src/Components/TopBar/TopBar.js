


import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faFileArrowUp,
  faGears,
  faLightbulb,
  faMoon,
  faPowerOff,
  faUserCircle,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import './topbar.css';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';

export default function TopBar({ handleProfile, profile }) {

  const [notice, setNotice] = useState(false);
  const topbarEndRef = useRef(null);

  const {toggleCanva} = useApp();
  const {theme, toggleTheme} = useTheme();

  console.log('theme value: ', theme);
  

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
        <button className="menu-btn" onClick={()=>toggleCanva()} aria-label="Toggle menu">
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
        <button onClick={toggleTheme} className="icon-btn brightness" title="Toggle theme" >
          {/* <FontAwesomeIcon icon={faLightbulb} /> */}

          {theme === 'dark' ? <FontAwesomeIcon icon={faLightbulb} /> : <FontAwesomeIcon icon={faMoon} />}

        </button>


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


