import React, { useState } from "react";
import down_tik from "../assets/images/down-tik.svg";

function DropdownMenu() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleDropdown = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((item) => item !== index));
    } else {
      // öğe açılır
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const menuItems = [
    "Biscuit sweet roll marzipan fruitcake wafer pastry dessert dessert?",
    "Liquorice dessert gingerbread tart I love cookie cotton candy sweet roll tootsie roll?",
    "Carrot cake sesame snaps lemon drops wafer caramels?",
    "I love lemon drops sesame snaps chupa chups cupcake. I love marzipan cookie carrot cake dessert muffin?",
    "Apple pie muffin marzipan tart chupa chups. Lollipop apple pie chocolate cake danish candy?",
  ];

  return (
    <ul className="container mx-auto gap-5 flex flex-col">
      {menuItems.map((item, index) => (
        <li key={index} className="relative border-b border-solid border-cardOne-bg cursor-pointer last:border-none">
          <div
            onClick={() => toggleDropdown(index)}
            className="flex justify-between items-center lg:pb-5 pb-2"
          >
            <span className=" lg:text-lg text-sm">{item}</span>
            <img src={down_tik} alt="down-tik" />
          </div>
          {openIndexes.includes(index) && (
            <div className="top-full mt-2 py-6 px-4 bg-cardOne-bg border-b border-solid border-cardOne-bg sm:text-sm">
              {/* normalde component olacak burası */}
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, a est in quisquam cupiditate facere laboriosam? Aliquid eligendi dicta magni praesentium, recusandae eveniet enim tempore. Eligendi dicta nulla, molestiae deserunt, et itaque eaque sequi ea, ipsam temporibus saepe! Sint expedita sit perferendis. Necessitatibus quisquam, doloremque minus itaque quos repellendus? Magni.</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
