"use client";
import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navabar/Navbar";

export const MainLayout = ({ children }) => {
  const [navSize, changeNavSize] = useState("large");

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9]">
      {/* Mobile: Hidden Sidebar */}
      <div className={`md:hidden`}>
        <Navbar />
        <div className="w-full py-6 px-8">{children}</div>
      </div>
      {/* Desktop: Sidebar and Content */}
      <div
        className={`hidden md:grid ${
          navSize === "small" ? "grid-cols-[75px,1fr]" : "grid-cols-[240px,1fr]"
        } transition-all duration-300 ease`}
      >
        <div>
          <SideBar navSize={navSize} changeNavSize={changeNavSize} />
        </div>
        <div>
          <Navbar />
          <div className="w-full py-6 px-8">{children}</div>
        </div>
      </div>
    </div>
  );
};
