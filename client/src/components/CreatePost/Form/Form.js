import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { createPost } from "../../../actions/posts.js";
import { useHistory } from "react-router";
import ReactQuill from "react-quill";
import "./style.css";
import { Paper, Typography } from "@material-ui/core";
import { modules, formats } from "./Editor.js";
import "../createstyle.css";
import Select from "react-select";

/**
* @author Mohamed Hagi
* @component Form

**/

const Form = (props) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
    description: "",
    category: "",
  });
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  const history = useHistory();

  const selectOptions = [
    { value: 1, label: "Sports" },
    { value: 2, label: "Tech" },
    { value: 3, label: "Entertainment" },
    { value: 4, label: "Life" },
    { value: 5, label: "Politics" },
  ];

  /**

function to handle submit
 */

  const handleClick = () => {
    dispatch(
      createPost({
        ...postData,
        creator: user?.result?.name,
        category: category,
      })
    );

    history.push("/addblog/success");
  };

  const handleChange = (e) => {
    setCategory(e.label.toLowerCase());
  };

  return (
    <div className="container" style={{ bottom: "50px" }}>
      <form autoComplete="off" noValidate onSubmit={handleClick}>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Title"
          variant="outlined"
          label="Creator"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Description"
          variant="outlined"
          label="Creator"
          value={postData.description}
          onChange={(e) => setPostData({ ...postData, description: e.target.value })}
        />
        <Select options={selectOptions} onChange={handleChange} />
        <p style={{ float: "left", paddingTop: "5px", paddingRight: "5px" }}>
          <i className="fas fa-image"></i> Cover Photo (500px x 500px):{" "}
        </p>{" "}
        <input
          type="text"
          className="form-control"
          name="cloudlink"
          placeholder="CloudFront Link"
          variant="outlined"
          label="Creator"
          value={postData.selectedFile}
          onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value })}
        />
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={postData.message}
          onChange={(defaultValue) => setPostData({ ...postData, message: defaultValue })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
