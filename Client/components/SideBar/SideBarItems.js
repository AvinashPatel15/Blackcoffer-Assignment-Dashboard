import Link from "next/link";
import React from "react";
import "../../app/globals.css";
import { usePathname } from "next/navigation";

const SideBarItems = ({ icon, title, navSize, link, iconColor }) => {
  const pathLink = usePathname();
  return (
    <Link href={link}>
      <div
        className={`w-full ${
          pathLink === link ? "bg-[#eef3ee] rounded-[10px]" : ""
        } flex gap-[30px] items-center ${
          navSize === "small" ? "justify-center" : "justify-start"
        } cursor-pointer px-[20px] py-[13px] `}
      >
        <button
          className={`${
            pathLink === link ? "text-[#658e68]" : "text-[#b6b6b6]"
          }`}
        >
          {icon}
        </button>

        <div className={`${navSize === "small" ? "hidden" : "block"}`}>
          <p
            className={`font-[600] text-[17px]  ${
              pathLink === link ? " text-[#658e68]" : "text-[#b6b6b6]"
            }`}
          >
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SideBarItems;
