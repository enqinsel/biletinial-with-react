import biletinial_logo from "../assets/images/biletinial-logo.svg";
import menu_logo from "../assets/images/menu-logo.svg";
import LocationMenu from "./LocationMenu";
import React, { useState } from "react";
import Categories from "./Categories";

function LocationTab() {
  const [isHidden, setIsHidden] = useState(true);
  const [isBlock, setIsBlock] = useState(false);

  const handleClick = () => {
    setIsHidden(!isHidden);
    setIsBlock(true);
  };


  const cancelClick = () => {
    setIsHidden(true);
  };

  const maskClick = () => {
    setIsBlock(false);
  }

  return (
    <div className="flex items-center gap-16">
      <img src={biletinial_logo} alt="biletinial-logo" />

      <div
        onClick={handleClick}
        className="flex items-center justify-center gap-2 cursor-pointer"
      >
        <img src={menu_logo} alt="menu-logo" />
        <span className="sm:hidden">Location</span>
      </div>
      <div className="lg:block hidden">
        <LocationMenu
          isHidden={isHidden}
          cancelClick={cancelClick}
        ></LocationMenu>
      </div>
      
      {/* mobile */}
      <div
        className={`${
          isBlock ? "absolute" : "hidden"
        } lg:hidden`}
      >
          <div className="w-full h-full bg-current fixed z-0 top-0 left-0 opacity-50 cursor-pointer" onClick={maskClick}></div>
          <div className="fixed left-0 top-28 p-3 border border-solid border-cardOne-bg bg-white" onClick={maskClick}>
            <Categories />
          </div>
      </div>
    </div>
  );
}

export default LocationTab;
