import "../../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import * as actionType from "../../constants/actionTypes";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./style.css";
import { Avatar } from "@material-ui/core";
import { getPostsBySearch, getPosts } from "../../actions/posts.js";

/**
 * @author Mohamed Hagi
 * @function Nav
 **/

const Nav = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/login");

    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const searchPost = () => {
    if (search.trim()) {
      history.push(`/searchResults/${search}`);
    } else {
      history.push("/");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchPost();
    }
  };

  return (
    <div>
      <div className="navigation-wrap bg-light start-header start-style">
        <div className="row">
          <div className="col-12">
            <div className="nav-container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a href="/" className="navbar-brand" style={{ height: "100%" }}>
                  <img src={logo} alt="" />
                </a>

                <button
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto py-4 py-md-0">
                    <li className="list-unstyled k-nav pl-md-0 ml-0 ml-md-4 ">
                      <a href="/category/life" className="k-nav">
                        LIFE
                      </a>
                    </li>

                    <li className="list-unstyled k-nav pl-md-0 ml-0 ml-md-4 ">
                      <a href="/category/tech" className="k-nav ">
                        TECH
                      </a>
                    </li>

                    <li className="list-unstyled k-nav pl-md-0 ml-0 ml-md-4 ">
                      <a href="/category/sports" className="k-nav">
                        SPORTS
                      </a>
                    </li>
                    <li className="list-unstyled k-nav pl-md-0 ml-0 ml-md-4 ">
                      <a href="/category/politics" className="k-nav">
                        POLITICS
                      </a>
                    </li>
                    <li className="list-unstyled k-nav pl-md-0 ml-0 ml-md-4 ">
                      <a href="/category/entertainment" className="k-nav">
                        ENTERTAINMENT
                      </a>
                    </li>
                    {user?.result.email === "mohamed.hagi9@gmail.com" && (
                      <li className="list-unstyled k-nav pl-md-0 ml-0 ml-md-4">
                        <a href="/createpost" className="k-nav">
                          CREATE{" "}
                        </a>
                      </li>
                    )}
                  </ul>

                  <ul className="navbar-nav fullscreen ml-auto py-4 py-md-0">
                    {user ? (
                      <li className="list-unstyled k-nav pl-md-0 ml-0 ml-md-4 dropdown">
                        <a
                          className="k-nav dropdown-toggle k-nav pl-md-0 ml-0 ml-md-4"
                          data-toggle="dropdown"
                          href="/profile"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <Avatar className="k-nav">
                            {user?.result?.name.charAt(0)}
                          </Avatar>
                        </a>
                        <div className="dropdown-menu dropdown-menu-left">
                          <button className="dropdown-item" onClick={logout}>
                            Log Out
                          </button>
                        </div>
                      </li>
                    ) : (
                        <li className="list-unstyled k-nav pl-md-0 ml-0 ml-md-4">
                          <a href="/login" className="k-nav">
                            <Avatar className="k-nav pl-md-0 ml-0 ml-md-4" />
                          </a>{" "}
                        </li>
                      )}

                    <div className="k-nav pl-md-0 ml-0 ml-md-4">
                      <input
                        type="search"
                        placeholder="Search KZONE..."
                        name="searchTerm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                      ></input>
                    </div>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
