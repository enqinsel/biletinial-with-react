function PartnerCardBottomComp({
  isFlexCol,
  bottom_desc,
  biPuan,
  button_text,
  check_logo,
  check_logo_sub,
  mail_logo,
  mail_logo_sub,
  items,
  desc_width,
  desc_size
}) {
  return (
    <div className="flex justify-between mt-5">
      <div className={`flex items-center w-${desc_width} gap-2 sm:w-28`}>
        <img className="m-0" src={mail_logo} alt={mail_logo_sub} />
        <span className={`text-${desc_size} sm:text-xs`}>{bottom_desc}</span>
      </div>
      <div className={`flex flex-${isFlexCol ? "col" : "row"} sm:flex sm:flex-col items-${items} gap-5`}>
        <div className="flex items-center gap-1">
          <img className="m-0" src={check_logo} alt={check_logo_sub} />
          <span className=" text-xs">{biPuan}</span>
        </div>
        <button className="bg-button-green hover:opacity-70 text-white uppercase text-xs lg:text-base rounded-lg 
        lg:w-60 lg:h-12 w-32 h-8">
          {button_text}
        </button>
      </div>
    </div>
  );
}

export default PartnerCardBottomComp;
