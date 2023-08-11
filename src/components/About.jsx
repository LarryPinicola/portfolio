import React from "react";
import myImage from "../img/LarryAgain.jpg";

const About = () => {
  return (
    <div className=" py-20 bg-white" id="about">
      <div className=" container mx-auto px-2 sm:px-7 md:px-4 lg:px-20">
        <div className=" flex flex-col md:flex-row custom-shadow gap-6 px-5 py-12 sm:p-16">
          <div className=" w-full sm:w-11/12 md:w-1/2 ">
            <div className=" flex flex-col items-start sm:flex-row">
              <img
                src={myImage}
                alt=""
                className=" rounded w-[150px] md:h-[120px] lg:h-auto"
              />
              <div className=" mt-7 px-3 sm:mt-0 flex flex-wrap flex-col">
                <div className=" flex flex-wrap items-center">
                  <span className=" text-lg font-semibold me-2">Name: </span>
                  <span className=" text-slate-500 md:text-sm lg:text-base">
                  Zwe Kyaw Htet
                  </span>
                </div>
                <div className=" my-4 flex flex-wrap items-center">
                  <span className=" text-lg font-semibold me-2">Profile: </span>
                  <span className=" text-slate-500 md:text-sm lg:text-base">
                    Front-End Developer
                  </span>
                </div>
                <div className="flex flex-wrap items-center  mb-4">
                  <span className=" text-lg font-semibold me-2">Email: </span>
                  <span className=" text-slate-500 md:text-sm lg:text-base">
                    thelarry1549@gmail.com
                  </span>
                </div>
                <div className=" flex max-w-full flex-wrap items-center">
                  <span className=" text-lg font-semibold me-2">Phone: </span>
                  <span className=" text-slate-500 md:text-sm lg:text-base">
                    09-269808010
                  </span>
                </div>
              </div>
            </div>
            {/* progress bar */}
            <div className=" mt-8 ">
              <p className=" font-semibold text-lg">Skills</p>
              <div className=" mt-6">
                <p className=" uppercase text-gray-800 text-base mb-2">
                  html 85%
                </p>
                <div className=" bg-[#CDE1F8] h-3">
                  <div className=" w-5/6 bg-portfolio-fill h-full"></div>
                </div>
              </div>
              <div className=" my-5">
                <p className=" uppercase text-gray-800 text-base mb-2">
                  css 85%
                </p>
                <div className=" bg-[#CDE1F8] h-3">
                  <div className=" w-5/6 bg-portfolio-fill h-full"></div>
                </div>
              </div>
              <div>
                <p className=" uppercase text-gray-800 text-base mb-2">
                  js 85%
                </p>
                <div className=" bg-[#CDE1F8] h-3">
                  <div className=" w-5/6 bg-portfolio-fill h-full"></div>
                </div>
              </div>
              <div className=" mt-6">
                <p className=" uppercase text-gray-800 text-base mb-2">
                  react 85%
                </p>
                <div className=" bg-[#CDE1F8] h-3">
                  <div className=" w-5/6 bg-portfolio-fill h-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full mt-12 md:mt-0 md:w-1/2">
            <div className=" mb-[15px]">
              <p className=" text-3xl font-semibold mb-5">About me</p>
              <div className=" w-[100px] h-[4px] bg-portfolio-fill"></div>
            </div>
            <p className=" text-xl text-gray-600 tracking-wide font-light">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Nulla porttitor accumsan tincidunt.
            </p>
            <p className=" text-xl text-gray-600 tracking-wide font-light py-4">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              porttitor at sem.
            </p>
            <p className=" text-xl text-gray-600 tracking-wide font-light">
              Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
