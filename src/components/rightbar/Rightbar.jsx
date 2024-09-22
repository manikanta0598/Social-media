import React from "react";
import "./rightbar.css";
import { Users } from "../../data";

export default function Rightbar() {
  return (
    <div className="classrightbar">
      <div className="righttop">
        <img src="assets/gift.png" className="gift" alt="" />
        <span className="righttext">
          <b>Manikanta Kayala</b> and <b>3 other friends</b> have birthday today
        </span>
      </div>
      <div className="rightmiddle">
        <img src="assets/post/advertising.png" className="adver" alt="" />
      </div>
      <div className="rightbottom">
        <h4>Online friends</h4>
        <div className="onlinefriends">
          {Users.filter((x) => x.active).map((u) => (
            <div className="onlinefrienditem">
              <img src={u.profilePicture} className="onlinefriendicon" alt="" />
              <div className="onlinefriendname">{u.username}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
