"use client"
import React, { useState } from "react";
import Slider from 'react-slick';
import Image from "next/image";
import {FaFacebook} from 'react-icons/fa'
function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3500,
    cssEase:"linear"
  };
  return (
    <div className="relative h-[500px]  shadow-inner before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[550px] object-cover"
            src="1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[550px] object-cover"
            src=""
            alt=""
          />
        </div>
      </Slider>
      <div className="container flex  justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
        <Image 
        src='vector.svg'
        alt="slider logo "
        width={200}
        height={200}
          />
          <h3 className="text-4xl mt-8 font-semibold tracking-tighter	 text-white">
            AkGur Global <br />
            kabloları
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
