"use client";

import React, { useEffect, useState } from "react";
import TopPart from "./TopPart";
import BottomPart from "./BottomPart";
export default function Home() {
  // const [windowsize, setWindowSize] = useState(null);

  // useEffect(() => {
  //   setWindowSize(window.innerWidth);

  //   const handleResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Cleanup function to remove the event listener
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [windowsize]);

  return (
    <main className="h-[1778px]  w-screen bg-[#F7F7F8] dark:bg-[#292B32] flex flex-col justify-between items-center py-[30px] ">
      <TopPart />
      <BottomPart />
    </main>
  );
}
