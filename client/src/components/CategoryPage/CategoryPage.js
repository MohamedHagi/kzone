import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../actions/posts";
import Post from "../HomePage/Post/Post.js";
import Header from "../HomePage/Header/Header.js";
import "./style.css";
import "./style.scss";
import { CircularProgress } from "@material-ui/core";

/**
 * @author Mohamed Hagi
 * @function CategoryPage
 **/

const CategoryPage = ({ match }) => {
  const dispatch = useDispatch();
  const postCategory = match.params.category;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts, isLoading } = useSelector((state) => state.posts);
  const category = postCategory;
  const filteredPosts = posts.filter((post) => post.category === postCategory);
  const latestPosts = filteredPosts.slice().reverse();

  return (
    <div>
      <div className="title font-sans font-large">
        <h1 className="category">{category} </h1>
      </div>
      <Header posts={filteredPosts} />
      {filteredPosts.length > 0 && !isLoading ? (
        <div className="band">
          {latestPosts.map((post, itemID) => {
            itemID += 1;
            return <Post post={post} itemID={itemID} key={post._id} />;
          })}
        </div>
      ) : (
        <div style={{ marginTop: "100px" }}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
