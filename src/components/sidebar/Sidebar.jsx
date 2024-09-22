import React from "react";
import "./sidebar.css";
import {
  Chat,
  RssFeed,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  School,
} from "@mui/icons-material";
import { Users } from "../../data";
export default function Sidebar() {
  return (
    <div className="classsidebar">
      <div className="sideitems">
        <div className="sideitem">
          <div className="sideicon">
            <RssFeed />
          </div>
          <div className="sidedesc">Feed</div>
        </div>
        <div className="sideitem">
          <div className="sideicon">
            <Chat />
          </div>
          <div className="sidedesc">Chats</div>
        </div>
        <div className="sideitem">
          <div className="sideicon">
            <PlayCircle />
          </div>
          <div className="sidedesc">Videos</div>
        </div>
        <div className="sideitem">
          <div className="sideicon">
            <Group />
          </div>
          <div className="sidedesc">Groups</div>
        </div>
        <div className="sideitem">
          <div className="sideicon">
            <Bookmark />
          </div>
          <div className="sidedesc">Bookmarks</div>
        </div>
        <div className="sideitem">
          <div className="sideicon">
            <HelpOutline />
          </div>
          <div className="sidedesc">Questions</div>
        </div>
        <div className="sideitem">
          <div className="sideicon">
            <WorkOutline />
          </div>
          <div className="sidedesc">Jobs</div>
        </div>
        <div className="sideitem">
          <div className="sideicon">
            <School />
          </div>
          <div className="sidedesc">Events</div>
        </div>
      </div>
      <button className="show">Show More</button>
      <div className="friendslist">
        {Users.map((f) => (
          <div className="frienditem">
            <img src={f.profilePicture} className="friendicon" alt="" />
            <div className="friendname">{f.username}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
