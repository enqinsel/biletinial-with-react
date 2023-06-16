import PartnerCardBottomComp from "./PartnerCardBottomComp";
import PriceComp from "./PriceComp";

import mail_logo from "../assets/images/mail-warning.svg";
import check_logo from "../assets/images/check.svg";
import event from "../assets/images/cardFour-events.svg";

function CardFour() {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-10">
        <h3 className="text-3xl lg:text-4xl font-bold">Daily Tickets & Program</h3>
        <p className="text-sm lg:text-base opacity-70">
          Jelly beans liquorice chupa chups bear claw gummi bears cake marzipan
          marshmallow.
        </p>
      </div>

      <div className="border-2 border-card-border border-solid rounded-xl shadow-40xl py-4 lg:py-8 lg:px-7 sm:px-4 flex flex-col gap-2">
        <div className="flex justify-between gap-2">
          <div className="w-9/12 flex flex-col gap-7">
            <div className="lg:flex sm:flex sm:flex-col sm:items-start lg:gap-12 sm:gap-4 p-0 relative lg:text-3xl text-sm font-bold items-center">
              <p>26 August 2023</p>
              <p className="before:content-['.'] sm:before:hidden before:text-3xl before:absolute before:-top-2  before:left-64">Day 1</p>
            </div>
            <p className="lg:text-sm text-xs">
              Candy canes danish bear claw wafer liquorice. Soufflé dessert
              chocolate danish pie toffee muffin marzipan candy canes. Powder
              cake cake sweet roll pie croissant soufflé. Sweet roll candy
              biscuit topping jelly beans muffin.
            </p>
          </div>
          <PriceComp 
           price_old="6,200.40"
           price_new="3,455.40"
           price_sub="All taxes and fees included"
           price_discount="early sale %40 off"
           price_fontSize="2xl"
          ></PriceComp>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <p className="font-bold lg:text-xl text-lg">Starts &amp; Events</p>
            <span className="lg:text-sm text-xs">Mcandy biscuit topping jelly beans muffin.</span>
          </div>
          <ul className="w-9/12 lg:flex sm:flex sm:flex-col lg:justify-start sm:items-center sm:mb-2 gap-20 p-0 m-0">
            <li className="flex gap-2">
              <img src={event} alt="event"/>
            </li>
            <li>
              <img src={event} alt="event"/>
            </li>
            <li>
              <img src={event} alt="event"/>
            </li>
          </ul>
        </div>
        <PartnerCardBottomComp
        isFlexCol={false}
        bottom_desc="No refunds are made for this event by the organizer."
        biPuan="You will get 345 BiPuan"
        button_text="SELECT DAY 1"
        check_logo={check_logo}
        check_logo_sub="check"
        mail_logo={mail_logo}
        mail_logo_sub="mail-logo"
        items = "center"
        desc_width = "1/5"
        desc_size = "xs"
        ></PartnerCardBottomComp>
      </div>
    </div>
  );
}

export default CardFour;
