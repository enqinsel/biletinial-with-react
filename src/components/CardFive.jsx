import DropdownMenu from "./DropdownMenu";
import pen from "../assets/images/pen-logo.svg";

function CardFive() {
  return (
    <div className="flex flex-col">
      <div className=" mb-20">
        <div className="flex flex-col mb-10">
          <h4 className="text-3xl lg:text-4xl font-bold">
            About Championships
          </h4>
          <p className="text-sm lg:text-base opacity-70">
            European Indoor Athletics Championships all details
          </p>
        </div>
        <div className="lg:w-1243 lg:h-179 w-80 sm:gap-6 flex flex-col justify-between lg:text-base text-sm">
          <p>
            Candy canes danish bear claw wafer liquorice. Soufflé dessert
            chocolate danish pie toffee muffin marzipan candy canes. Powder cake
            cake sweet roll pie croissant soufflé. Sweet roll candy biscuit
            topping jelly beans muffin. Bear claw powder candy canes chocolate
            bear claw lemon drops chupa chups gummies. Lemon drops cookie
            marzipan jelly beans topping. Topping biscuit gummi bears cookie
            chocolate bar tiramisu dessert.
          </p>
          <p>
            Cake pudding gingerbread sweet roll tootsie roll. Cookie chocolate
            cake oat cake chocolate cake carrot cake shortbread gummi bears
            cotton candy. Dessert sesame snaps sweet roll icing gingerbread
            donut. Carrot cake muffin gummies sweet roll ice cream danish
            caramels. Cookie pie sesame snaps wafer jelly gummi bears gummi
            bears ice cream.
          </p>
        </div>
      </div>
      <DropdownMenu></DropdownMenu>
      <a
        href="/"
        className="mt-2 flex items-center gap-2 underline lg:text-sm text-xs"
      >
        Missing information? Suggest edit <img src={pen} alt="pencil" />
      </a>
    </div>
  );
}

export default CardFive;
