import React from "react";
import { useHistory } from "react-router";

/**
 * @author Mohamed Hagi
 * @function CreatePostSuccess
 **/

const CreatePostSuccess = (props) => {
  const history = useHistory();

  return (
    <div className="container" style={{ position: "relative", marginTop: "100px" }}>
      <p>YOUR POST WAS ADDED SUCCESSFULLY</p>
      <div>
        <a href="/" className="btn btn-primary">
          Return to Home Page
        </a>
      </div>
    </div>
  );
};

export default CreatePostSuccess;
