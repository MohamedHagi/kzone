import React from "react";
import "./style.css";
import logo from "./K-ZONE.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

/**
 * @author Mohamed Hagi
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <footer
      className=" mx-auto py-12 text-left text-white"
      style={{ backgroundColor: "black", width: "100%", bottom: "0", position: "relative" }}
    >
      <div className="footer-container">
        <div className="flex flex-col max-w-8xl px-8  mx-auto ">
          <div className="relative inline-block text-left text-white mb-1 footer-image">
            <img src={logo} alt="" />
          </div>
          <div className="my-8 text-left">
            <ul className="footer-list font-bold text-white font-2xl font-sans space-y-8">
              <li>
                <a href="/category/life" className="text-white ">
                  LIFE
                </a>
              </li>
              <li>
                <a href="/category/tech" className="text-white">
                  TECH
                </a>
              </li>
              <li>
                <a href="/category/sports" className="text-white ">
                  SPORTS
                </a>
              </li>
              <li>
                <a href="/category/politics" className="text-white ">
                  POLITICS
                </a>
              </li>
              <li>
                <a href="/category/entertainment" className="text-white ">
                  ENTERTAINMENT
                </a>
              </li>
            </ul>

            <ul className=" footer-list_small flex flex-col mt-12 font-bold text-white text-sm space-y-4">
              <li>
                <a href="/about" className="text-white ">
                  About K-ZONE
                </a>
              </li>
              <li>
                <a href="/about" className="text-white ">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/about" className="text-white ">
                  Sitemap
                </a>
              </li>
            </ul>
            <ul className=" footer-social flex flex-row text-white flex-wrap my-8">
              <li>
                <a href="facebook.com" className="text-white me-4 social">
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="lg"></FontAwesomeIcon>
                </a>
              </li>

              <li>
                <a href="twitter.com" className="text-white me-4 social">
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="lg"></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="instagram.com" className="text-white me-4 social">
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="lg"></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="tiktok.com" className="text-white me-4 social">
                  <FontAwesomeIcon icon={["fab", "tiktok"]} size="lg"></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="linkedin.com" className="text-white me-4 social">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg"></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="github.com/MohamedHagi" className="text-white me-4 social">
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg"></FontAwesomeIcon>
                </a>
              </li>
            </ul>

            <div className="subtitle leading-5">
              <p className="text-white font-sans"> ©2021 Mohamed Hagi. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
