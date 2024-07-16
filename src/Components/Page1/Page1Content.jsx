import React from "react";
import "./Page1Content.css";
import Vid from "../../Assets/herovid.mp4"

const Page1Content = () => {
  return (
    <>
      <div className="xlscreens">
        <div className="xlsinner">
          <div className="page1Main">
          <div className="video-container">
      <video className="full-screen-video" autoPlay loop muted>
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1Content;
