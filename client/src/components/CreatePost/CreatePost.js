import React, { useEffect } from "react";
import Form from "./Form/Form";

/**
 * @author Mohamed Hagi
 * @function CreatePost
 **/

const CreatePost = (props) => {
  useEffect(() => {
    document.body.className = "create";
    return () => {
      document.body.className = "dark";
    };
  });

  return (
    <div
      className="container"
      style={{ position: "relative", marginTop: "100px", marginBottom: "50px" }}
    >
      <Form />
    </div>
  );
};

export default CreatePost;
