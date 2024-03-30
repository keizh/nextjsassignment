"use client";

import { CenterComponent } from "./CenterComponent";
import Button from "./Button";

function TopPart() {
  return (
    <div className="h-[673px] w-[80%] sm:w-[640px] md:w-[768px] lg:w-[1024px]  xl:w-[1241px] ">
      <p className="text-[40px] border-b-4 border-[#738FFF] inline-block  mb-[35px]">
        Sports
      </p>
      <CenterComponent />

      <div className="flex justify-center items-center h-fit w-full mt-[18px]">
        <Button
          classnames="h-[46px] w-[128px] bg-[#2C9CF0] text-white flex items-center justify-center rounded"
          innerContent="See More"
        />
      </div>
    </div>
  );
}

export default TopPart;
