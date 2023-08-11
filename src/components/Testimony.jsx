import React from "react";
import "./testimony.css";
import Slides from "./Slides";

const Testimony = () => {
  return (
    <div className="mountain bg-image1 py-32 relative lg:h-screen lg:bg-fixed">
      <div className="overlay bg-portfolio-fill absolute"></div>
      <div className="content">
        <Slides />
      </div>
    </div>
  );
};

export default Testimony;
