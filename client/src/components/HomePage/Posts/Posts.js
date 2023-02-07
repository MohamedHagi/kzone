import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "../Post/Post";
import "./style.scss";
import moment from "moment";
import { Link } from "react-router-dom";

const Posts = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const latestPosts = posts.slice().reverse();

  return !posts.length ? <CircularProgress /> : <div className="band"></div>;
};

export default Posts;
