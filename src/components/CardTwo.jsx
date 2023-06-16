import PartnerCard from "./PartnerCard";
import mid_img from "../assets/images/tik.svg"
import mail_logo from "../assets/images/mail-logo.svg"
import check_logo from "../assets/images/check.svg"

function CardTwo({isBlockImg, isFlexCol, isBlock}) {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-3xl lg:text-5xl font-bold">Special Offer Limited</h2>
        <p className="lg:text-base text-sm opacity-70">
          Cheesecake cotton candy bear claw sugar plum jelly-o donut chocolate
        </p>
      </div>
      <PartnerCard
        title="Combined & Accommodation Almira Hotel"
        isBlock={isBlock}
        isBlockImg={isBlockImg}
        description="The grand championship, in which more than 600 elite athletes from 51 countries will compete, will be held at Ataköy Athletics Hall between 2-5 March 2023."
        mid_img={mid_img}
        mid_sub="tik"
        mid_content_one="Biscuit fruitcake fruitcake powder brownie marzipan muffin."
        mid_content_two="Muffin cake chocolate cake cookie bonbon brownie tootsie roll."
        mid_content_three="Dragée bear claw liquorice bear claw."
        price_old="7,551.60"
        price_new="5,710.98"
        price_sub="All taxes and fees included"
        price_discount="early sale %40 off"
        bottom_desc="Cancel before 26 August this package
        included full refund"
        biPuan="You will get 571 BiPuan"
        button_text="select this package"
        check_logo={check_logo}
        check_logo_sub="check"
        mail_logo={mail_logo}
        mail_logo_sub="mail-logo"
        isFlexCol={isFlexCol}
        width = "1270"
        height= "450"
        fontSize="xl"
        price_fontSize="4xl"
        width_title="w-9/12"
        items = "end"
        desc_width = "2/5"
        desc_size = "sm"
      ></PartnerCard>
    </div>
  );
}

export default CardTwo;
