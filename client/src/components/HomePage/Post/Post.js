import React from "react";
import moment from "moment";
import "./style.scss";
import { Link } from "react-router-dom";

const Post = ({ post, itemID }) => {
  return (
    <div className={`item-${itemID}`} style={{ paddingBottom: "50px" }}>
      <Link to={`/blogpost/${post._id}`} className="card" style={{ textDecoration: "none" }}>
        <div className="thumb" style={{ backgroundImage: `url(${post.selectedFile})` }}></div>
        <article>
          <h1 style={{ color: "black" }}>{post.title}</h1>
          <p style={{ color: "black" }}>{post.description}</p>
          <span>Posted by {post.creator} </span>
          <span>{moment(post.createdAt).fromNow()}</span>
        </article>
      </Link>
    </div>
  );
};

export default Post;
