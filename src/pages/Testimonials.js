import React, { useEffect, useState } from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
const Testimonials = () => {
  const [testimonial, setTestimonial]=useState([]);
  useEffect(()=>{
    fetch("testimonialData.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  },[])
  return (
    <div className="max-w-[1440px] mx-auto p-10">
      <h2 className="text-xl md:text-2xl font-bold text-primary text-center m-5">
        Testimonials
      </h2>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className=""
      >
        {testimonial?.map(({ name, image, description }, index) => (
          <SwiperSlide className="mb-8 shadow-xl" key={index}>
            <div className="p-8 card card-compact bg-base-100 ">
              <figure>
                <img src={image} alt="testimonial-images" className="w-24" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="flex text-orange-500 space-x-2">
                  <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;