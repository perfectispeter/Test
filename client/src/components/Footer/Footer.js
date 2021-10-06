import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YoutubeIcon from "@material-ui/icons/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* <h3
        style={{
          color: "#FC8268",
          textAlign: "center",
          marginTop: "-50px",
          fontFamily: "sans-serif",
        }}
      >
        Upper Murray Community Calendar: One stop for all updates
      </h3> */}
      <div class="footer-component">
        <footer class="page-footer indigo darken-3">
          <div id="footer" class="red accent-2">
            <div class="row">
              <div class="col m3 s12">
                <h5 class="white-text">About Us</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Our Vision
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Our Mission
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col m3 s12">
                <h5 class="white-text">Services</h5>
                <ul>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://corryongnc.org/upper-murray-innovation-foundation/"
                    >
                      Upper Murray Community Bakery
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#">
                      Upper Murray Community Garage
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#">
                      Upper Murray Innovation Foundation
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col m3 s12">
                <h5 class="white-text">Contact Us</h5>
                <ul>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://corryongnc.org/"
                    >
                      Corryong Neighbourhood Centre (CNC)
                      <a href="tel:(02) 6076 2176">(02) 6076 2176</a>
                    </a>
                  </li>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://corryongnc.org/upper-murray-community-bakery/"
                    >
                      Upper Murray Community Bakery
                      <a href="tel:(02) 6076 1196">(02) 6076 1196</a>
                    </a>
                  </li>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://corryongnc.org/upper-murray-community-garage/"
                    >
                      Upper Murray Community Garage
                      <a href="tel:(02) 6037 1587">(02) 6037 1587</a>
                    </a>
                  </li>
                  <li>
                    <a
                      class="grey-text text-lighten-4"
                      href="https://www.facebook.com/"
                      style={{ color: "white" }}
                    >
                      <FacebookIcon fontSize="large" />
                    </a>
                    <a
                      class="grey-text text-lighten-4"
                      href="https://www.instagram.com/"
                      style={{ paddingLeft: "20px", color: "white" }}
                    >
                      <InstagramIcon fontSize="large" />
                    </a>
                    <a
                      class="grey-text text-lighten-4"
                      href="https://twitter.com/"
                      style={{ paddingLeft: "20px", color: "white" }}
                    >
                      <TwitterIcon fontSize="large" />
                    </a>
                    <a
                      class="grey-text text-lighten-4"
                      href="https://www.youtube.com/"
                      style={{ paddingLeft: "20px", color: "white" }}
                    >
                      <YoutubeIcon fontSize="large" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col m3 s12">
                <h5 class="white-text">Important Links</h5>
                <ul>
                  <li>
                    <a
                      class="grey-text text-lighten-3"
                      href="https://www.vic.gov.au/bushfire-recovery-victoria"
                    >
                      <span style={{ marginLeft: "10px" }}>
                        Bushfire Recovery
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="center">
            <div class="red accent-2 ">© 2014 Copyright UMCC</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
