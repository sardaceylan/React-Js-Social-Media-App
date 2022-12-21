import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="post-profile-img"
            />
            <span className="post-username">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img src={post.photo} alt="" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post bottom-left">
            <img
              src="assets/like.png"
              alt=""
              className="like-icon"
              onClick={likeHandler}
            />
            <img
              src="assets/heart.png"
              alt=""
              className="like-icon"
              onClick={likeHandler}
            />
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
