import stars from "../assets/images/stars.svg";
import Contact from "./Contact";
import Iframe from "./Iframe";

function CardSix() {
  return (
    <div className="flex sm:flex sm:flex-col bg-white border-2 border-card-border border-solid rounded-xl shadow-40xl p-7 gap-14">
      <div>
        <div>
          <div className="flex gap-5">
            <h5 className="font-bold lg:text-3xl text-2xl">Ataköy Athletics Hall</h5>
            <button className=" bg-follow-blue hover:opacity-70 lg:rounded-full sm:rounded-sm lg:py-1 lg:px-4 p-2 sm:h-5 flex items-center justify-center text-sm text-white gap-1">
              Follow <span className="font-bold">+</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className=" text-xs">7.8 Rating, 1.405 Review</span>
            <img src={stars} alt="stars" />
          </div>
          <p className="text-sm lg:text-base lg:w-558 lg:h-20 mt-4">
            Candy canes danish bear claw wafer liquorice. Soufflé dessert
            chocolate danish pie toffee muffin marzipan candy canes.
          </p>
        </div>
        <Contact></Contact>
      </div>
      <Iframe />
    </div>
  );
}

export default CardSix;
