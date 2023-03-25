import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import "./overview.css";

const Overview = () => {
  return (
    <>
      <div className="overview-wrapper">
        <div className="overview">
          <div className="main left">
            <h1>Be better at DSA & CP</h1>
            <p className="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <div className="alternate">
              <div className="buttons">
                <a href="#" className="btn light">
                  Join now &#10132;
                </a>
                <a href="#" className="btn dark">
                  View curriculum
                </a>
              </div>

              <div className="subsections" style={{width:'95%'}}>
                <div className="left">
                  <div className="item">
                    <div className="emty-b"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="item">
                    <div className="emty-b"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="right">
                  <div className="item">
                    <div className="emty-b"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="item">
                    <div className="emty-b"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of left side of overview */}
          <div className="main right">
            <img className="main-img" src="/images/main.png" alt="main image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
