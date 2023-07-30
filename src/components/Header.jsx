import React from "react";
import { BsCart3 } from "react-icons/bs";
import { PiShootingStarThin } from "react-icons/pi";

const Header = () => {
  return (
    <header className="container max-w-6xl mx-auto flex justify-between h-10 items-center  mt-6">
      <span>
        <PiShootingStarThin size={35} color="gray" />{" "}
      </span>
      <div className="flex relative">
        <h1 className="header_title  text-4xl md:text-6xl font-bold mr-2">
          Saturn
        </h1>
        <span className="rotate-90 absolute top-3 -right-2 md:-right-6 md:top-6 text-gray-600 text-[0.43rem] md:text-[0.7rem] h-4  ">
          by GHC
        </span>
      </div>
      <div className="relative cursor-pointer">
        <span className="bg-red-500 rounded-full w-4 h-4  text-sm absolute -top-1 -left-1  text-white flex justify-center items-center">
          1
        </span>
        <BsCart3 size={35} color="gray" />
      </div>
    </header>
  );
};

export default Header;
