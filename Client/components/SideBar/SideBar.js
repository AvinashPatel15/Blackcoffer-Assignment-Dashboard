import React from "react";
import "../../app/globals.css";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import SideBarItems from "./SideBarItems";

export default function SideBar({ navSize, changeNavSize }) {
  return (
    <div
      className={`${
        navSize === "small" ? "w-[75px]" : "w-[240px]"
      } bg-white min-h-[100vh] flex flex-col fixed top-0 left-0 z-[100] pt-[10px] transition-all duration-300 ease`}
    >
      <div
        className={`w-full flex flex-col ${
          navSize === "large" ? "items-start" : "items-center"
        } ${navSize === "large" ? "py-[4px]" : "py-[16px]"} px-[11px]`}
      >
        <div
          className={`w-full flex ${
            navSize === "small" ? "justify-center" : "justify-between"
          } items-center px-[10px] `}
        >
          <div className={`${navSize === "small" ? "hidden" : "block"}`}>
            <p className="logo">Blackcoffer</p>
          </div>

          <button
            onClick={() => {
              if (navSize === "small") changeNavSize("large");
              else changeNavSize("small");
            }}
          >
            {navSize === "small" ? (
              <AiOutlineDoubleRight size={20} color="black" />
            ) : (
              <AiOutlineDoubleLeft size={20} color="black" />
            )}
          </button>
        </div>

        <div
          className={`w-full flex flex-col ${
            navSize === "small" ? "gap-[20px]" : "gap-[10px]"
          } mt-[35px]`}
        >
          <SideBarItems
            navSize={navSize}
            icon={<FiHome size={"18px"} />}
            title="Dashboard"
            link={"/"}
          />
        </div>
      </div>
    </div>
  );
}
