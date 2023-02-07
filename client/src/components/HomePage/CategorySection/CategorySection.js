import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../Post/Post.js";
import "../Posts/style.scss";
import "./style.css";
import { Link } from "react-router-dom";
import { getPosts } from "../../../actions/posts.js";

/**
 * @author Mohamed Hagi
 * @function CategorySection
 **/

const CategorySection = ({ match, category }) => {
  const dispatch = useDispatch();

  const post = useSelector((state) =>
    state.posts.posts.filter((post) => post.category === category)
  );

  const latestOrder = post.slice().reverse();

  return (
    <div className="category-container">
      <div className="category-title">{category.toUpperCase()}</div>
      <hr style={{ borderTop: "1px solid black", width: "75%", margin: "5px auto" }} />

      {latestOrder.length > 1 ? (
        <div className="cover-category">
          <Link to={`/blogpost/${latestOrder[0]._id}`}>
            <img src={latestOrder[0].selectedFile} alt="related post" className="post-img" />
          </Link>
        </div>
      ) : (
        <div className="cover-category">
          <Link to={`/blogpost/${latestOrder._id}`}>
            <img src={latestOrder.selectedFile} alt="related post" className="post-img" />
          </Link>
        </div>
      )}

      {latestOrder.map((post) => {
        return (
          <div key={post._id}>
            <Link to={`/category/${post.category}`} className="category-post" key={post._id}>
              {post.category.toUpperCase()}
            </Link>
            <Link to={`/blogpost/${post._id}`} className="category-post-title">
              <h5 className="category-post-title">{post.title}</h5>
              <hr style={{ borderTop: "1px solid lightgrey", width: "100%" }} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
