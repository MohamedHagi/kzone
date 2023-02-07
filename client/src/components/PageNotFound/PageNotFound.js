import React, { useEffect } from "react";
import "./style.css";

/**
 * @author
 * @function PageNotFound
 **/

const PageNotFound = (props) => {
  useEffect(() => {
    document.body.className = "create";
    return () => {
      document.body.className = "dark";
    };
  });
  return (
    <div id="notfound" style={{ position: "relative" }}>
      <div className="notfound">
        <div className="notfound-404">
          <div></div>
          <h1>404</h1>
        </div>
        <h2>Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name changed or is
          temporarily unavailable.
        </p>
        <a href="/">home page</a>
      </div>
    </div>
  );
};

export default PageNotFound;
