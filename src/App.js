import React from "react";
import "./App.css";

import TopBar from "./Components/TopBar/TopBar";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import FrontLayout from "./Components/FrontLayout/FrontLayout";
import PlayListItem from "./Components/PlayListsItem/PlayListItem";
import PlayVideo from "./Components/PlayVideo/PlayVideo";
import Profile from "./Components/Profile/Profile";
import User from "./Components/User/User";

import { Route, Routes } from "react-router-dom";
import { useApp, AppProvider } from "./Components/context/AppContext";

export default function App() {


  
  return (
    <AppProvider>

      <Routes>
      
        <Route element={<FrontLayout />}>
      
          <Route path="/topbar" element={<TopBar />} />
          <Route path="/" element={<Home />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
          <Route path="/playListItem/:playListId" element={<PlayListItem />} />
          <Route path="/videoplay/:videoId" element={<PlayVideo />} />
      
        </Route>
      </Routes>
    </AppProvider>
  );
}
