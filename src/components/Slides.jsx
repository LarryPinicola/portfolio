import { Carousel } from "@mantine/carousel";
import React from "react";

const Slides = () => {
  return (
    <section className="">
      <Carousel className="">
        {/* 1st carousel */}
        <Carousel.Slide className="flex overflow-hidden flex-col gap-2 justify-center items-center">
          <img
            src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonial-2.jpg"
            alt=""
            className="w-40 rounded-full mb-2"
          />
          <h1 className="text-2xl font-semibold text-white mb-3">
            XAVI ALONSO
          </h1>
          <p className="text-xl text-gray-300 w-[93%] text-center md:w-[60%] lg:w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium itaque facere magni mollitia harum impedit quaerat
            explicabo.
          </p>
        </Carousel.Slide>
        {/* 2nd carousel */}
        <Carousel.Slide className="flex overflow-hidden flex-col gap-2 justify-center items-center">
          <img
            src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonial-4.jpg"
            alt=""
            className="w-40 rounded-full mb-2"
          />
          <h1 className="text-2xl font-semibold text-white mb-3">
            MARTA SOCRATE
          </h1>
          <p className="text-xl text-gray-300 w-[93%] text-center md:w-[60%] lg:w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium itaque facere magni mollitia harum impedit quaerat
            explicabo.
          </p>
        </Carousel.Slide>
      </Carousel>
    </section>
  );
};

export default Slides;
