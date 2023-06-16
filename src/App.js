import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.js";
// import { useState } from "react";
// import Menu from "./components/Menu";

function App() {
  // const [isBlock, setIsBlock] = useState(true);
  // const [itemName, setItemName] = useState()

  // const clickHandler = (itemName) => {
  //   setIsBlock(false);
  //   setItemName(itemName)
  // };

  // const mainHandler = () => {
  //   setIsBlock(true);
  // };

  return (
    <div className="App">
      {/* <Navbar clickHandler={clickHandler}></Navbar> */}
      <Navbar ></Navbar>
      {/* <Main clickHandler={mainHandler}></Main> */}
      <Main></Main>
      {/* <Menu mainHandler={mainHandler} isBlock={isBlock} itemName={itemName}></Menu> */}
    </div>
  );
}

export default App;
