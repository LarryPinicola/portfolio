import { Avatar } from "@mantine/core";
import React from "react";
import { BsClock } from "react-icons/bs";

const Blog = ({themeColor}) => {
  return (
    <div className={themeColor} id="blog">
      <div className=" bg-[#f5f5f5]">
       <div className="container mx-auto">
       <div className=" flex flex-col justify-center items-center pt-[3rem]">
          <h2 className=" text-[3rem] mb-[0.5rem] font-bold">BLOG</h2>
          <p className=" text-center px-5 text-[#4e4e4e] mb-[1rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <hr className=" bg-portfolio-fill w-[40px] h-[5px] border-none" />
        </div>
        <div className=" flex flex-col md:flex-row justify-center md:gap-6 px-3 md:px-[52px] items-center pb-[4rem] md:pb-[6rem] pt-[4rem] lg:mx-[15px]">
          <div className=" shadow-lg shadow-gray-300 rounded-[5px] border-[1px] border-[rgba(0,0,0,0.175)] relative">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/post-1.jpg"
              alt=""
            />
            <div className=" bg-white px-[1rem] pt-[1.3rem] pb-[1rem]">
              <span className="  mt-[-35px] flex justify-center">
                <button className=" rounded-[4px] bg-portfolio-fill">
                  <h6 className=" font-[500] text-white px-[15px] py-[6px] text-[0.7rem]">
                    TRAVEL
                  </h6>
                </button>
              </span>
              <span>
                <h3 className=" hover:text-portfolio-base transition duration-[0.5s] font-[500] py-[0.5rem] leading-6  lg:leading-0 text-[1.3rem]">
                  See more ideas about Travel
                </h3>
              </span>
              <span>
                <p className=" mb-[1rem] text-[#4e4e4e]">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </span>
            </div>
            <div className="border-t-[1px] rounded-b-[5px] py-[0.5rem] px-[1rem] border-[rgba(0,0,0,0.175)] flex justify-between md:flex-col lg:flex-row bg-gray-100">
              <div className=" items-center flex">
                <span className=" mr-[7px]">
                  <Avatar
                    size={32}
                    src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonial-2.jpg"
                    radius="xl"
                  />
                </span>
                <span className=" hover:text-portfolio-base transition duration-[0.5s]">
                  <p>Morgan Freeman</p>
                </span>
              </div>
              <div className=" md:justify-end gap-1 flex items-center">
                <span className=" text-[#4e4e4e] text-[16px]">
                  <BsClock />
                </span>
                <span className=" text-[#4e4e4e]">
                  <p>10 min</p>
                </span>
              </div>
            </div>
          </div>

          <div className=" shadow-lg shadow-gray-300 rounded-[5px] border-[1px] border-[rgba(0,0,0,0.175)] relative my-5">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/post-2.jpg"
              alt=""
            />
            <div className=" bg-white px-[0.9rem] py-[1rem]">
              <span className="  mt-[-32px] flex justify-center">
                <button className=" rounded-[4px] bg-portfolio-fill">
                  <h6 className=" font-[500] text-white px-[15px] py-[6px] text-[0.7rem]">
                    WEB DESIGN
                  </h6>
                </button>
              </span>
              <span>
                <h3 className=" hover:text-portfolio-base transition duration-[0.5s] font-[500] py-[0.5rem] leading-6 lg:leading-0 text-[1.3rem]">
                  See more ideas about Travel
                </h3>
              </span>
              <span>
                <p className=" mb-[1rem] text-[#4e4e4e]">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </span>
            </div>
            <div className="border-t-[1px] rounded-b-[5px] py-[0.5rem] px-[1rem] border-[rgba(0,0,0,0.175)] flex justify-between md:flex-col lg:flex-row bg-gray-100">
              <div className=" items-center flex">
                <span className=" mr-[7px]">
                  <Avatar
                    size={32}
                    src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonial-2.jpg"
                    radius="xl"
                  />
                </span>
                <span className=" hover:text-portfolio-base transition duration-[0.5s]">
                  <p>Morgan Freeman</p>
                </span>
              </div>
              <div className=" md:justify-end gap-1 flex items-center">
                <span className=" text-[#4e4e4e] text-[16px]">
                  <BsClock />
                </span>
                <span className=" text-[#4e4e4e]">
                  <p>10 min</p>
                </span>
              </div>
            </div>
          </div>

          <div className=" shadow-lg shadow-gray-300 rounded-[5px] border-[1px] border-[rgba(0,0,0,0.175)] relative ">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/post-3.jpg"
              alt=""
            />
            <div className=" bg-white px-[0.9rem] py-[1rem]">
              <span className="  mt-[-32px] flex justify-center">
                <button className=" rounded-[4px] bg-portfolio-fill">
                  <h6 className=" font-[500] text-white px-[15px] py-[6px] text-[0.7rem]">
                    WEB DESIGN
                  </h6>
                </button>
              </span>
              <span>
                <h3 className=" hover:text-portfolio-base transition duration-[0.5s] font-[500] py-[0.5rem] leading-6 lg:leading-0 text-[1.3rem]">
                  See more ideas about Travel
                </h3>
              </span>
              <span>
                <p className=" mb-[1rem] text-[#4e4e4e]">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </span>
            </div>
            <div className="border-t-[1px] rounded-b-[5px] py-[0.5rem] px-[1rem] border-[rgba(0,0,0,0.175)] flex justify-between md:flex-col lg:flex-row bg-gray-100">
              <div className=" items-center flex">
                <span className=" mr-[7px]">
                  <Avatar
                    size={32}
                    src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonial-2.jpg"
                    radius="xl"
                  />
                </span>
                <span className=" hover:text-portfolio-base transition duration-[0.5s]">
                  <p>Morgan Freeman</p>
                </span>
              </div>
              <div className=" md:justify-end gap-1 flex items-center">
                <span className=" text-[#4e4e4e] text-[16px]">
                  <BsClock />
                </span>
                <span className=" text-[#4e4e4e]">
                  <p>10 min</p>
                </span>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Blog;
