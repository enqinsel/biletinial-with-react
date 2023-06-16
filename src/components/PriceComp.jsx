function PriceComp({ price_old, price_new, price_sub, price_discount, price_fontSize }) {
  return (
    <div className="flex flex-col lg:gap-1 gap-1 items-end">
      <p className="flex gap-1 text-from-grey lg:text-base sm:text-xs">
        From <span className="line-through">₺{price_old}</span>
      </p>
      <p className={`font-bold lg:text-${price_fontSize} sm:text-base`}>₺ {price_new}</p>
      <p className=" text-xs sm:whitespace-nowrap font-medium text-taxes-green">{price_sub}</p>
      <p className=" text-xs sm:whitespace-nowrap uppercase font-medium rounded bg-early-bg text-early-text lg:p-2 p-1">{price_discount}</p>
    </div>
  );
}

export default PriceComp;
