"use client";

import React, { useEffect, useState } from "react";
import TopPart from "./TopPart";
import BottomPart from "./BottomPart";
export default function Home() {
  return (
    <main className="h-[1778px]  w-screen bg-[#F7F7F8] dark:bg-[#292B32] flex flex-col justify-between items-center py-[30px] ">
      <TopPart />
      <BottomPart />
    </main>
  );
}
