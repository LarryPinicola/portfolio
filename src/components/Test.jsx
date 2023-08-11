import React from "react";
import "./test.css";
import DynamicNumber from "./DynamicNumber";

const Test = () => {
  return (
   <div className="container lg:mx-auto lg:px-[70px] px-2">
     <div className="counter bg-image py-24 relative lg:bg-fixed">
      <div className="overlay bg-portfolio-fill absolute"> </div>
      <div className="content md:flex md:justify-center md:gap-14 lg:gap-32 md:items-center">
        {/* works completed */}
        <div className="flex flex-col items-center gap-3 justify-center mt-5 mb-5">
          <div className="">
            <span className="ico-circle-white">
              <i className="fa fa-check"></i>
            </span>
          </div>
          <div className="text-white text-center">
            <DynamicNumber targetValue={450} />
            {/* <h1 className="text-2xl">450</h1> */}
            {/* <p
                data-purecounter-start="0"
                data-purecounter-end="450"
                data-purecounter-duration="1"
                className="counter purecounter"
              ></p> */}
            <span className=" text-white text-sm">WORKS COMPLETED</span>
          </div>
        </div>
        {/* years of experience */}
        <div className="flex flex-col items-center gap-3 justify-center mt-5 mb-5">
          <div className="">
            <span className="ico-circle-white">
              <i className="fa fa-book"></i>
            </span>
          </div>
          <div className="text-white text-center">
            <DynamicNumber targetValue={25} />
            {/* <h1 className="text-2xl text-center">25</h1> */}
            {/* <p
                data-purecounter-start="0"
                data-purecounter-end="25"
                data-purecounter-duration="1"
                className="counter purecounter"
              ></p> */}
            <span className=" text-white text-sm">YEARS OF EXPERIENCE</span>
          </div>
        </div>
        {/* total clients */}
        <div className="flex flex-col items-center gap-3 justify-center mt-5 mb-5">
          <div className="">
            <span className="ico-circle-white">
              <i className="fa fa-user-group"></i>
            </span>
          </div>
          <div className="text-white text-center">
            <DynamicNumber targetValue={550} />
            {/* <h1 className="text-2xl">550</h1> */}
            {/* <p
                data-purecounter-start="0"
                data-purecounter-end="550"
                data-purecounter-duration="1"
                className="counter purecounter"
              ></p> */}
            <span className=" text-white text-sm">TOTAL CLIENTS</span>
          </div>
        </div>
        {/* award won */}
        <div className="flex flex-col items-center gap-3 justify-center mt-5 mb-5">
          <div className="">
            <span className="ico-circle-white">
              <i className="fa fa-award"></i>
            </span>
          </div>
          <div className="text-white text-center">
            <DynamicNumber targetValue={48} />
            {/* <h1 className="text-2xl">48</h1> */}
            {/* <p
                data-purecounter-start="0"
                data-purecounter-end="48"
                data-purecounter-duration="1"
                className="counter purecounter"
              ></p> */}
            <span className=" text-white text-sm">AWARD WON</span>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Test;
