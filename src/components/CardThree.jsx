import PartnerCard from "./PartnerCard";
import mid_img from "../assets/images/tik.svg";
import mail_logo from "../assets/images/mail-warning.svg";
import check_logo from "../assets/images/check.svg";

function CardThree({ isBlockImg, isFlexCol, isBlock }) {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-10">
        <h3 className="text-3xl lg:text-4xl font-bold">Combine Tickets</h3>
        <p className="text-sm lg:text-base opacity-70">
        Jelly beans liquorice chupa chups bear claw gummi bears cake marzipan marshmallow.
        </p>
      </div>
      <div className="lg:flex sm:flex sm:flex-col gap-8">
        <PartnerCard
          title="Personal Combine"
          isBlock={isBlock}
          isBlockImg={isBlockImg}
          description="Biscuit fruitcake fruitcake powder brownie marzipan muffin fruitcake fruitcake powder ookie bonbon brownie tootsie roll."
          mid_img={mid_img}
          mid_sub="tik"
          mid_content_one="Biscuit fruitcake fruitcake powder"
          mid_content_two="Muffin cake chocolate cake cookie"
          mid_content_three="Dragée bear claw liquorice"
          price_old="6,200.40"
          price_new="3,455.40"
          price_sub="All taxes and fees included"
          price_discount="early sale %40 off"
          bottom_desc="No refunds are made for this event by the organizer."
          biPuan="You will get 345 BiPuan"
          button_text="select this package"
          check_logo={check_logo}
          check_logo_sub="check"
          mail_logo={mail_logo}
          mail_logo_sub="mail-logo"
          isFlexCol={isFlexCol}
          width="635"
          height="426"
          fontSize="lg"
          price_fontSize="2xl"
          width_title="w-7/12"
          items="end"
          desc_width="2/5"
          desc_size = "xs"
        ></PartnerCard>
        <PartnerCard
          title="Family Combine"
          isBlock={isBlock}
          isBlockImg={isBlockImg}
          description="Biscuit fruitcake fruitcake powder brownie marzipan muffin fruitcake fruitcake powder ookie bonbon brownie tootsie roll."
          mid_img={mid_img}
          mid_sub="tik"
          mid_content_one="Biscuit fruitcake fruitcake powder"
          mid_content_two="Muffin cake chocolate cake cookie"
          mid_content_three="Dragée bear claw liquorice"
          price_old="8,446.72"
          price_new="6,056.98"
          price_sub="All taxes and fees included"
          price_discount="early sale %40 off"
          bottom_desc="No refunds are made for this event by the organizer."
          biPuan="You will get 605 BiPuan"
          button_text="select this package"
          check_logo={check_logo}
          check_logo_sub="check"
          mail_logo={mail_logo}
          mail_logo_sub="mail-logo"
          isFlexCol={isFlexCol}
          width="635"
          height="426"
          fontSize="lg"
          price_fontSize="2xl"
          width_title="w-7/12"
          items = "end"
          desc_width="2/5"
          desc_size = "xs"
        ></PartnerCard>
      </div>
    </div>
  );
}

export default CardThree;
