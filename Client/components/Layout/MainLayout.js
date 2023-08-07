"use client";
import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navabar/Navbar";

export const MainLayout = ({ children }) => {
  const [navSize, changeNavSize] = useState("large");
  return (
      <div
        className={`w-full min-h-full bg-[#f9f9f9] grid ${
          navSize == "small" ? "grid-cols-[75px,1fr]" : "grid-cols-[240px,1fr]"
        } transition-all duration-300 ease`}
      >
        <div className="min-h-full">
          <SideBar navSize={navSize} changeNavSize={changeNavSize} />
        </div>
        <div className="min-h-full">
          <Navbar />
          <div className="w-full py-6 px-8">{children}</div>
        </div>
      </div>
  );
};
