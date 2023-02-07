import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts.js";
import CategorySection from "./CategorySection/CategorySection";
import WhatsNew from "./CategorySection/WhatsNew";
import Header from "./Header/Header.js";
import { useLocation } from "react-router";
import "./homestyle.css";
import "./homepage.css";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if ((location.pathname = "/")) {
      dispatch(getPosts());
      console.log("rendering!");
    }
  }, [location]);

  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div style={{ paddingTop: "50px", paddingBottom: "16px" }}>
      <Header posts={posts.posts} />
      <div className="home-container">
        <CategorySection category="life" />
        <CategorySection category="tech" />
        <WhatsNew />
        <CategorySection category="sports" />
        <CategorySection category="politics" />
        <CategorySection category="entertainment" />
      </div>
    </div>
  );
};

export default Home;
