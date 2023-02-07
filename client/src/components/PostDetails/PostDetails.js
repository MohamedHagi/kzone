import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deletePost } from "../../actions/posts";
import { Link } from "react-router-dom";
import "./postDetails.css";
import RelatedPosts from "./RelatedPosts.js";
import { getPosts, likePost } from "../../actions/posts.js";
import { CircularProgress } from "@material-ui/core";
import GitalkComponent from "gitalk/dist/gitalk-component";

/**
 * @author
 * @function PostDetails
 **/

const PostDetails = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const postId = match.params._id;

  const posts = useSelector((state) => state.posts.posts);
  const post = posts.filter((post) => post._id === postId);
  const user = JSON.parse(localStorage.getItem("profile"));

  console.log(post);

  useEffect(() => {
    document.body.className = "create";
    return () => {
      document.body.className = "dark";
    };
  });

  return (
    <main className="blog-post">
      <div className="container">
        {post.length > 0 ? (
          <div>
            <h1 className="page-title" data-aos="fade-up" style={{ textAlign: "center" }}>
              {post[0].title}
            </h1>
            <p className="blog-post-meta" data-aos="fade-up" data-aos-delay="200">
              Written by <Link to="/profile">{post[0].creator}</Link> •{" "}
              <span>{moment(post[0].createdAt).format("MMM Do, YYYY")} </span>
            </p>
            <section className="blog-post-featured-img" data-aos="fade-up" data-aos-delay="300">
              <img src={post[0].selectedFile} alt="blog post" className="w-100" />
            </section>
            <section className="post-content">
              <div
                className="col-lg-9 mx-auto alldevices"
                dangerouslySetInnerHTML={{ __html: post[0].message }}
              />
              <br />
            </section>
            <div>
              <button onClick={() => dispatch(likePost(postId))}>Likes: {post[0].likeCount}</button>
            </div>

            <RelatedPosts category={post[0].category} />
          </div>
        ) : (
          <CircularProgress />
        )}
      </div>
    </main>
  );
};

export default PostDetails;
