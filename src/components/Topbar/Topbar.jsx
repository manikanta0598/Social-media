import React from "react";
import "./topbar.css";
import { Search, Person, Message, Notifications } from "@mui/icons-material";

export default function Topbar({ setIsHome, isHome }) {
  function Homepage() {
    return setIsHome(!isHome);
  }

  return (
    <div className="navbar">
      <div className="navbarleft">Social</div>
      <div className="navbarcenter">
        <div className="totalsearchbar">
          <Search className="searchicon" />
          <input
            type="text"
            className="searchbar"
            placeholder="Search for friend, post or video"
          />
        </div>
      </div>
      <div className="navbarright">
        <div className="rightlinkssec">
          <div className="rightlinks" onClick={Homepage}>
            {isHome ? "Home" : "Profile"}
          </div>
          <div className="rightlinks">Timeline</div>
        </div>
        <div className="iconsright">
          <Person />
          <Message />
          <Notifications />
        </div>

        <img src="/assets/person/2.jpeg" className="profileimage" alt="" />
      </div>
    </div>
  );
}
