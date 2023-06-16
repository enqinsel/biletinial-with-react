function MenuExpectedFilm({expected_img_url,expected_img_sub,expected_film_name,expected_film_sub, itemName}) {
  return (
    <div className="flex flex-col  sm:w-full sm:items-center sm:gap-4">
      <p className=" font-semibold lg:text-2xl text-lg pb-5">En Beklenen {itemName}</p>
      <img className="w-255 h-319" src={expected_img_url} alt={expected_img_sub} />
      <div className="flex flex-col gap-1">
        <span className=" text-base font-semibold">{expected_film_name}</span>
        <span className=" text-sm opacity-70">{expected_film_sub}</span>
      </div>
    </div>
  );
}

export default MenuExpectedFilm;
