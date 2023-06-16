import cardOne_img from "../assets/images/cardOne-img.svg";
import arrow from "../assets/images/profile-arrow-logo.svg";
import date from "../assets/images/date.svg";
import location from "../assets/images/location.svg";
import clock from "../assets/images/clock.svg";
import venue_logo from "../assets/images/venue-link-logo.svg";
import CardOneDetail from "./CardOneDetail";

function CardOne() {
  return (
    <div className="mt-12 lg:mt-16 lg:flex sm:flex sm:flex-col sm:items-center lg:gap-44">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl lg:text-6xl font-bold lg:w-558 w-80 lg:leading-68">
          European Atletics Championship
        </h1>
        <ul className="p-0 flex justify-start gap-5">
          <li className=" bg-categories-grey rounded pt-1 pb-1 pl-3 pr-3 uppercase font-medium leading-6 text-xs cursor-pointer">
            atletizm
          </li>
          <li className=" bg-categories-grey rounded pt-1 pb-1 pl-3 pr-3 uppercase font-medium leading-6 text-xs cursor-pointer">
            sport
          </li>
          <li className=" bg-categories-grey rounded pt-1 pb-1 pl-3 pr-3 uppercase font-medium leading-6 text-xs cursor-pointer">
            championships
          </li>
        </ul>
        <p className="lg:text-base text-xs sm:w-80 lg:leading-6">
          Marzipan halvah croissant sweet jelly tootsie roll pie. Chupa chups
          lollipop chocolate cake chocolate sugar plum chupa chups dragée.
          Halvah carrot cake cheesecake dragée liquorice marzipan puddingear
          claw cake jelly sesame snaps topping.&nbsp;
          <a href="/" className="font-bold relative">
            more about championship
            <img className="inline absolute" src={arrow} alt="arrow" />
          </a>
        </p>
        <div className="lg:flex sm:flex-col justify-between w-full gap-10">
          <CardOneDetail
            title_img={date}
            title_img_sub="date"
            title="Event Date"
            sub="European Indoor Athletics Championships When?"
            isBold={true}
            fontSize="text-base"
            strong="Date:"
            strong_span="26 August - 04 December 2023"
            info_img={clock}
            info="17:30 Opening the Gate"
          ></CardOneDetail>

          <CardOneDetail
            title_img={location}
            title_img_sub="location"
            title="Venue Details"
            sub="European Indoor Athletics Championships Where?"
            isBold={false}
            strong="Atakoy Athletics Hall,"
            strong_span="Istanbul Turkiye"
            content_detail="7.8 Rating, 1.405 Review"
            info_img={venue_logo}
            info_img_sub="venue"
            info_link="Venue Details & Address"
            fontSize="text-lg"
          ></CardOneDetail>
        </div>
      </div>
      <img className="sm:w-36" src={cardOne_img} alt="cardOne-img" />
    </div>
  );
}

export default CardOne;
