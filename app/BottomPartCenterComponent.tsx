"use client";

// for articles do not touch
import React from "react";
import Image from "next/image";
import LowerCard from "../public/lowerCard.jpeg";
import Button from "./Button";

import "swiper/element/css/autoplay";
import { bottomInfo } from "./Info";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";

function BottomPartCenterComponent() {
  // const [isLessThan640px, setIsLessThan640px] = useState(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setIsLessThan640px(window.innerWidth < 640);
  //   }

  //   const handleWindowResize = () => {
  //     setIsLessThan640px(window.innerWidth < 640);
  //   };

  //   window.addEventListener("resize", handleWindowResize);

  //   // Cleanup function to remove the event listener
  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);

  return (
    <div className="w-[305px] sm:w-[620px]  md:w-[700px] lg:w-[1000px] xl:w-[1085.75px]  sm:pl-[30%] md:pl-[30%] lg:px-[10%] h-fit relative  flex justify-center ">
      <div className="w-[270] sm:w-[500px] md:w-[600px] lg:w-[900] xl:w-[917px] overflow-hidden flex gap-10 ">
        <Swiper
          freeMode={true}
          loop={true}
          autoplay={{ delay: 1200, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[FreeMode, Autoplay, Navigation]}
          className={`BottomPartCenterComponentmySwiper`}
          breakpoints={{
            315: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {bottomInfo.map((val, i) => (
            <SwiperSlide key={i}>
              <article className="w-[257px] h-fit bg-[#FFFFFF] shadow-[#EFEFF0] dark:bg-[#3B3E47] dark:shadow-[#282930] flex flex-col items-center">
                <div>
                  <div className=" w-[226.1px] h-[401.25px] ">
                    <Image
                      src={val.image}
                      className="w-full h-full object-cover object-center"
                      alt=""
                    />
                  </div>
                  <div className="circle h-[30px] w-full px-[10px] text-black flex items-center justify-center">
                    <div
                      className=" shadow-[#EFEFF0]  dark:shadow-[#282930]  h-[2px] w-full px-[10px] text-black flex items-center justify-center"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='grey' stroke-width='4' stroke-dasharray='6%2c 20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
                        width: "100%",
                        height: "2px",
                      }}
                    ></div>
                  </div>
                  <p className="text-lg font-medium text-black text-center mb-[7px] dark:text-white">
                    {val.name}
                  </p>
                  <div className="flex h-[61.66px] w-[213px] flex-col justify-between items-center  dark:text-white">
                    <p className="text-[12px] ">{val.date}</p>
                    <p className="text-[12px] text-grey text-center">
                      {val.info}
                    </p>
                  </div>
                  <Button
                    classnames="w-[213px] h-[36px] flex items-center justify-center bg-black text-white mt-[20px] mb-[15px] "
                    innerContent="Take Flight Collection"
                  />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BottomPartCenterComponent;
