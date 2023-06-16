function MenuFilms({ img, img_sub, name, kind, desc }) {
  return (
    <div className="flex items-center gap-5">
      <img src={img} alt={img_sub} />
      <div className="flex flex-col gap-1 items-start">
        <span className=" text-sm lg:text-base font-semibold  sm:whitespace-nowrap">{name}</span>
        <ul className="flex gap-6 items-center sm:whitespace-nowrap">
          {kind.map((item, index) => (
            <li className="text-sm opacity-70 list-disc first:list-none" key={`${name}-${index}-${item}`}>{item}</li>
          ))}
          <span className="flex text-sm opacity-70">{desc}</span>
        </ul>
      </div>
    </div>
  );
}

export default MenuFilms;
