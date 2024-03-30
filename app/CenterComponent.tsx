"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import baseball1 from "../public/baseball-1.jpeg";
import SmallBoxHeader from "./SmallBoxHeader";
import SmallBoxText from "./SmallBoxText";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { topInfo } from "./Info";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";

export default function CenterComponent() {
  return (
    <>
      <div className=".swiper-button-next"></div>
      <Swiper
        freeMode={true}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        className={`CenterComponentmySwiper`}
        breakpoints={{
          315: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {topInfo.map((val, i) => {
          if (val.ad == false) {
            return (
              <SwiperSlide key={i}>
                <article className="h-[511px] w-[237px] bg-[#FFFFFF] shadow-[#EFEFF0] dark:bg-[#3B3E47] dark:shadow-[#282930] p-2 flex flex-col justify-between ">
                  <div className="w-[217px] h-[385.31px] relative">
                    <Image
                      src={val.image}
                      layout="fill"
                      className="w-full h-full object-cover object-center"
                      alt=""
                    />
                  </div>
                  <p className="text-[17px] font-bold text-black dark:text-white">
                    {val.name}
                  </p>
                  <div className="h-[54px] w-[217px] bg-[#F7F7F8] dark:bg-[#292B32] rounded grid grid-rows-2 grid-cols-2 text-xs p-2">
                    <SmallBoxHeader text={val.header1 || ""} />
                    <SmallBoxHeader text={val.header2 || ""} />
                    <SmallBoxText text={val.text1 || ""} />
                    <SmallBoxText text={val.text2 || ""} />
                  </div>
                </article>
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide key={i}>
                <article className="h-[511px] w-[237px] bg-[#FFFFFF] shadow-[#EFEFF0] dark:bg-[#3B3E47] dark:shadow-[#282930] p-2 flex flex-col justify-between ">
                  <div className="advertisment  w-[218.4px] h-[218px] ">
                    <Image
                      src={val.image}
                      className="w-full h-full object-cover object-center z-[10]"
                      alt=""
                    />
                  </div>
                  <div className="h-[cal(100%-218px)] w-full flex flex-col items-center justify-between py-[20px] px-[6.5px]">
                    <h3 className="text-[20px] font-bold text-black dark:text-white mb-4 text-left">
                      {val.name}
                    </h3>
                    <p className="text-[12px]  text-grey dark:text-white mb-10 text-left">
                      {val.text}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
}
