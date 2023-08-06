import Link from "next/link";
import React from "react";
import "../../app/globals.css";

const SideBarItems = ({ icon, title, navSize, link }) => {
  return (
    <Link href={`/${link}`}>
      <div
        className={`w-full flex gap-[30px] items-center ${
          navSize === "small" ? "justify-center" : "justify-start"
        } cursor-pointer p-[15px]`}
      >
        <button>{icon}</button>

        <div className={`${navSize === "small" ? "hidden" : "block"}`}>
          <p className="font-[600] text-[17px] text-[#b6b6b6]">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default SideBarItems;
