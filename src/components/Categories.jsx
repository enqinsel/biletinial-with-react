import cinema from "../assets/images/cinema-logo.svg";
import theatre from "../assets/images/theatre-logo.svg";
import music from "../assets/images/music-logo.svg";
import sport from "../assets/images/sport-logo.svg";
import festivals from "../assets/images/festivals-logo.svg";
import shows from "../assets/images/shows-logo.svg";
import menu from "../assets/images/menu-logo.svg";
import CategoriesItem from "./CategoriesItem";
import { useState } from "react";
import Menu from "../components/Menu";

function Categories() {
  const [isBlock, setIsBlock] = useState(true);
  const [itemName, setItemName] = useState();

  const categoryData = [
    {
      img_url: cinema,
      text: "Cinema",
      img_sub: "cinema-logo",
      itemHandler: () => {
        const itemName = "Cinema";
        setItemName(itemName);
        setIsBlock(false);
      },
    },
    {
      img_url: theatre,
      text: "Theatre",
      img_sub: "theatre-logo",
      itemHandler: () => {
        const itemName = "Theatre";
        setItemName(itemName);
        setIsBlock(false);
      },
    },
    {
      img_url: music,
      text: "Music",
      img_sub: "music-logo",
      itemHandler: () => {
        const itemName = "Music";
        setItemName(itemName);
        setIsBlock(false);
      },
    },
    {
      img_url: sport,
      text: "Sport",
      img_sub: "sport-logo",
      itemHandler: () => {
        const itemName = "Sport";
        setItemName(itemName);
        setIsBlock(false);
      },
    },
    {
      img_url: festivals,
      text: "Festivals",
      img_sub: "festivals-logo",
      itemHandler: () => {
        const itemName = "Festivals";
        setItemName(itemName);
        setIsBlock(false);
      },
    },
    {
      img_url: shows,
      text: "Shows",
      img_sub: "shows-logo",
      itemHandler: () => {
        const itemName = "Shows";
        setItemName(itemName);
        setIsBlock(false);
      },
    },
    {
      img_url: menu,
      text: "Menu",
      img_sub: "menu-logo",
      itemHandler: () => {
        const itemName = "Menu";
        setItemName(itemName);
        setIsBlock(false);
      },
    },
  ];

  const mainHandler = () => {
    setIsBlock(true);
  };

  return (
    <>
      <div className="lg:flex sm:flex-col lg:w-558 justify-center items-center gap-8 text-sm">
        {categoryData.map((category, index) => (
          <CategoriesItem
            key={index}
            img_url={category.img_url}
            text={category.text}
            img_sub={category.img_sub}
            clickHandler={category.itemHandler}
          />
          
        ))}
        <div className="absolute left-0">
          <Menu
            mainHandler={mainHandler}
            isBlock={isBlock}
            itemName={itemName}
          ></Menu>
        </div>
      </div>
    </>
  );
}

export default Categories;
