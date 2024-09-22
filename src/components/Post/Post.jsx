import React, { useState } from "react";
import "./Post.css";
import { Favorite, ModeComment, Share } from "@mui/icons-material";
import { Users } from "../../data";
export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsliked] = useState(false);

  const likehandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsliked(!isliked);
  };

  return (
    <div className="postbox">
      <div className="postop">
        <img
          src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
          className="postphoto"
          alt=""
        />
        <span className="name">
          {Users.filter((u) => u.id === post.userId)[0].username}
        </span>
        <span className="time"> {post.date}</span>
      </div>
      <div className="postmiddlebox">
        <span className="posttext">{post?.desc}</span>
        <div className="postmiddle">
          <img src={post.photo} className="feedpostimage" alt="" />
        </div>
      </div>

      <div className="postbottom">
        <div className="postbottombloc">
          <Favorite htmlColor="tomato" onClick={likehandler} />
          <span>{like} Likes</span>
        </div>
        <div className="postbottombloc">
          <ModeComment htmlColor="orange" />
          <span>{post.comment} Comments</span>
        </div>
        <div className="postbottombloc">
          <Share htmlColor="green" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}
