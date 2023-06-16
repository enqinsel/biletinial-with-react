import Stack from "./Stack";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import CardFive from "./CardFive";
import CardSix from "./CardSix";

function Main() {
  return (
    <div className="container pt-28 sm:p-5">
      <Stack></Stack>
      <div className="flex flex-col gap-28">
        <CardOne></CardOne>
        <CardTwo isBlockImg={true} isFlexCol={true} isBlock={true}></CardTwo>
        <CardThree
          isBlockImg={false}
          isFlexCol={true}
          isBlock={false}
        ></CardThree>
        <CardFour></CardFour>
        <CardFive></CardFive>
        <CardSix></CardSix>
        <div></div>
      </div>
    </div>
  );
}

export default Main;
