import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import "./home.css";

export default function Home({ setIsHome, isHome }) {
  return (
    <div>
      <Topbar setIsHome={setIsHome} isHome={isHome} />
      <div className="container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
