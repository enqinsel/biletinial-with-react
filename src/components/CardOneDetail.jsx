function CardOneDetail({
  title,
  sub,
  content_detail,
  info,
  info_link,
  info_img,
  info_img_sub,
  title_img,
  title_img_sub,
  strong,
  strong_span,
  isBold,
  fontSize
}) {
  return (
    <div className="flex gap-2 items-start sm:mb-4">
      <img src={title_img} alt={title_img_sub} />
      <div className="flex flex-col gap-1">
        <span className="font-bold lg:text-2xl text-xl">{title}</span>
        <span className="lg:text-sm text-xs text-indoor opacity-70">{sub}</span>
        <strong
          className={`font-${isBold ? "bold" : "medium"} ${fontSize} sm:text-sm`}
        >
          {strong}
          <span className="font-normal">
            {strong_span}
          </span>
        </strong>
        <span className="text-xs">{content_detail}</span>
        <div className="flex gap-1">
          <img src={info_img} alt={info_img_sub} />
          <a className="underline text-xs lg:text-sm hover:text-blue-600" href="/">
            {info_link}
          </a>
          <span className="text-sm">{info}</span>
        </div>
      </div>
    </div>
  );
}

export default CardOneDetail;
