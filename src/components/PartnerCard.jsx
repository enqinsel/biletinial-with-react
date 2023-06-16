import PartnerCardBottomComp from "./PartnerCardBottomComp";
import PriceComp from "./PriceComp";

import tripadvisor from "../assets/images/tripadvisor.svg";
function PartnerCard({
  title,
  isBlock,
  isBlockImg,
  description,
  mid_img,
  mid_sub,
  mid_content_one,
  mid_content_two,
  mid_content_three,
  price_old,
  price_new,
  price_sub,
  price_discount,
  bottom_desc,
  biPuan,
  button_text,
  check_logo,
  check_logo_sub,
  mail_logo,
  mail_logo_sub,
  isFlexCol,
  width,
  height,
  fontSize,
  price_fontSize,
  width_title,
  items,
  desc_width,
  desc_size
}) {
  return (
    <div className={`flex justify-between border-2 border-card-border border-solid rounded-xl shadow-40xl w-${width} h-${height} sm:h-auto`}>
      <div className={`${isBlockImg ? "block" : "hidden"} sm:hidden`}>
        <div className="w-306 h-450 bg-cardOne-bg rounded-l-xl"></div>
      </div>
      <div className="pt-4 lg:pt-8 pr-4 lg:pr-7 pb-4 lg:pb-8 pl-4 lg:pl-7 flex flex-col justify-between ">
        <div className="flex justify-between w-full">
          <div className={`${width_title} flex flex-col gap-4`}>
            <p className="font-bold lg:text-3xl sm:text-lg">{title}</p>
            <div
              className={`${
                isBlock ? "block" : "hidden"
              } flex sm:flex sm:flex-col sm:items-start items-center gap-4 text-xs`}
            >
              <strong className="flex items-center font-bold">
                <img src={tripadvisor} alt="tripadvisor" />
                Tripadvisor
              </strong>
              <span className="opacity-70">8.2, 1.025 Review</span>
              <a className="underline hover:text-blue-600" href="/">
                Hotel Details
              </a>
            </div>
            <p className="lg:text-sm text-xs">{description}</p>
          </div>
          <PriceComp
            price_old={price_old}
            price_new={price_new}
            price_sub={price_sub}
            price_discount={price_discount}
            price_fontSize = {price_fontSize}
          ></PriceComp>
        </div>
        <div className="w-full flex flex-col gap-4 sm:mt-4">
          <p className={`font-bold text-${fontSize} sm:text-base`}>Whats included in this plan?</p>
          <ul className="flex flex-col lg:gap-5 gap-2 p-0 m-0">
            <li className="flex lg:gap-2 gap-1">
              <img src={mid_img} alt={mid_sub} />
              <span className="sm:text-sm">{mid_content_one}</span>
            </li>
            <li className="flex lg:gap-2 gap-1">
              <img src={mid_img} alt={mid_sub} />
              <span className="sm:text-sm">{mid_content_two}</span>
            </li>
            <li className="flex lg:gap-2 gap-1">
              <img src={mid_img} alt={mid_sub} />
              <span className="sm:text-sm">{mid_content_three}</span>
            </li>
          </ul>
        </div>
        <PartnerCardBottomComp
          isFlexCol={isFlexCol}
          bottom_desc={bottom_desc}
          biPuan={biPuan}
          button_text={button_text}
          check_logo={check_logo}
          check_logo_sub={check_logo_sub}
          mail_logo={mail_logo}
          mail_logo_sub={mail_logo_sub}
          items = {items}
          desc_width = {desc_width}
          desc_size = {desc_size}
        ></PartnerCardBottomComp>
      </div>
    </div>
  );
}

export default PartnerCard;
