import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../Post/Post";
import { Posts } from "../../data";
export default function Feed() {
  return (
    <div className="classfeedbar">
      <Share />
      {Posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
