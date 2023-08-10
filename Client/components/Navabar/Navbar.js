import React from "react";
import SearchBar from "./SearchBar";
import { VscGraphLine } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";

import NavbarDropDown from "./NavbarDropDown";

const Navbar = () => {
  return (
    <div className="w-full bg-white py-[15px] px-[33px] flex justify-between items-center sticky top-0 z-[100]">
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center gap-[5px]">
          <button className="p-[7px] text-white rounded-full bg-black">
            <VscGraphLine />
          </button>
          <p className="text-md font-semibold">Analytics</p>
        </div>
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <button className="p-[7px] rounded-full border border-[#b6b6b6]">
          <IoMdNotificationsOutline size={23} />
        </button>

        <NavbarDropDown />
      </div>
    </div>
  );
};

export default Navbar;
