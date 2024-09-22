import React from "react";
import "./share.css";
import {
  PhotoLibrary,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@mui/icons-material";

export default function Share() {
  return (
    <div className="sharecontainer">
      <div className="shareheading">
        <img src="/assets/person/2.jpeg" className="postimage" alt="" />
        <input
          type="text"
          className="postsearch"
          placeholder="What's in your mind Mani?"
        />
      </div>

      <hr className="line" />
      <div className="sharebottom">
        <div className="iconbutton">
          <PhotoLibrary htmlColor="tomato" />
          <span>Photo or Video</span>
        </div>
        <div className="iconbutton">
          <Label htmlColor="blue" />
          <span>Photo or Video</span>
        </div>
        <div className="iconbutton">
          <LocationOn htmlColor="green" />
          <span>Photo or Video</span>
        </div>
        <div className="iconbutton">
          <EmojiEmotions htmlColor="orange" />
          <span>Photo or Video</span>
        </div>
        <button className="sharebutton">Share</button>
      </div>
    </div>
  );
}
