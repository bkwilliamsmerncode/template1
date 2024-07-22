import React from "react";
import "./Page1Content.css";
import Vid from "../../Assets/herovid.mp4"

const Page1Content = () => {
  return (
    <>
      <div className="xlscreens">
        <div className="xlsinner">
          <div className="page1Main">
          <div className="App">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <p style={{
          fontSize: "50px"
        }}>Brian Williams</p>
        <p style={{
          fontSize: "70px"
        }}>Full Stack Web Developer</p>
        <div className="buttons">
          <button className="btn1">PROJECTS</button>
          <button className="btn2">CONTACT</button>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1Content;
