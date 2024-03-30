import React, { useEffect, useState } from "react";
import BottomPartCenterComponent from "./BottomPartCenterComponent";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

export default function BottomPart() {
  // const [windowsize, setWindowSize] = useState(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setWindowSize(window.innerWidth < 640);
  //   }

  //   const handleResize = () => {};

  //   window.addEventListener("resize", handleResize);

  //   // Cleanup function to remove the event listener
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [windowsize]);
  return (
    <div className="h-[918px] w-[315px] mx-auto sm:w-[620px] md:[760px] lg:w-[1100px] xl:w-[1240px] flex justify-center items-center dark:bg-[#1F1E2B] ">
      <div className="arrow w-[305px] sm:w-[600px]  md:w-[700px] lg:w-[1020px] xl:w-[1085.75px] h-[820px]  flex flex-col justify-between items-center relative ">
        <div className="h-fit w-fit border-2 border-[#2C9CF0] py-2 absolute left-[-20px] top-[55%] z-[100]  cursor-pointer">
          <RiArrowLeftSLine
            size={36} // set custom `width` and `height`
            color="blue" // set `fill` color
            className="my-icon cursor-pointer" // add custom class name
          />
        </div>
        <button className="h-fit w-fit border-2 border-[#2C9CF0] py-2 absolute right-[-20px] top-[55%] z-[100] cursor-pointer">
          <RiArrowRightSLine
            size={36} // set custom `width` and `height`
            color="blue" // set `fill` color
            className="my-icon cursor-pointer" // add custom class name
          />
        </button>
        <h1 className="spotlight text-[30px] sm:text-2xl md:text-6xl text-black dark:text-white font-black">
          Collection Spotlight
        </h1>
        <p className="smallspotlight text-[12px] sm:text-[18px] text-black dark:text-white text-center md:w-fit h-fit xl:w-[917px]">
          Discover extraordinary moments with our Spotlight Collection
          metatickets--exclusive access to premium events for an unforgettable{" "}
          <br />
          experience. Grab yours today!
        </p>
        <BottomPartCenterComponent />
      </div>
    </div>
  );
}
