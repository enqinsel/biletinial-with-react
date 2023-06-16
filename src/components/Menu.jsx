import MenuCinemas from "./MenuCinemas";
import MenuExpectedFilm from "./MenuExpectedFilm";
import MenuFilms from "./MenuFilms";

import spider from "../assets/images/spider.svg";
import kings_man from "../assets/images/kings-man.svg";
import pengu from "../assets/images/pengu.svg";
import ivedik from "../assets/images/ivedik.svg";
import uncharted from "../assets/images/uncharted.svg";
import eren_film from "../assets/images/eren-film.svg";
import hurkus from "../assets/images/hurkus.svg";
import resident_evil from "../assets/images/resident-evil.svg";
import moonfall from "../assets/images/moonfall.jpg";

function Menu({ isBlock, mainHandler, itemName }) {

  const populerFilms = [
    {
      img: spider,
      img_sub: "spider",
      name: "Örümcek-Adam: Eve Dönüş Yok",
      kind: ["Aksiyon", "Macera", "Bilim Kurgu"],
    },
    {
      img: kings_man,
      img_sub: "kings_man",
      name: "The King's Man: Başlangıç",
      kind: ["Aksiyon", "Komedi"],
    },
    {
      img: pengu,
      img_sub: "pengu",
      name: "Kaptan Pengu ve Arkadaşları 2",
      kind: ["Çocuk", "Animasyon"],
    },
    {
      img: ivedik,
      img_sub: "ivedik",
      name: "Recep İvedik 7: İvedik Mecliste",
      kind: ["Komedi", "Küfür"],
    },
  ];

  const visionFilms = [
    {
      img: uncharted,
      img_sub: "uncharted",
      name: "Uncharted: Başlangıç",
      kind: [],
      desc: "11 Şubat 2022’de Vizyonda",
    },
    {
      img: eren_film,
      img_sub: "eren_film",
      name: "En soğuk düşman",
      kind: [],
      desc: "18 Şubat 2022’de Vizyonda",
    },
    {
      img: hurkus,
      img_sub: "hurkus",
      name: "Aslan Hürkuş Kayıp Elmas",
      kind: [],
      desc: "25 Şubat 2022’de Vizyonda",
    },
    {
      img: resident_evil,
      img_sub: "resident",
      name: "Resident Evil: Last Stand",
      kind: [],
      desc: "04 Mart 2022’de Vizyonda",
    },
  ];

  return (
    <>
      <div className={`${isBlock ? "hidden" : "block"}`}>
        <div
          className=" w-full h-full bg-current fixed top-77 left-0 opacity-70 sm:-top-12 cursor-pointer"
          onClick={mainHandler}
        ></div>
        <div className="fixed sm:overflow-y-auto sm:top-0 left-0 top-16 sm:h-full bg-white font-roboto w-full pt-12 pr-5 pb-5 pl-5 border-l border-r border-b border-solid border-border-left">
          <div>
            <div className="flex sm:flex sm:flex-col">
              <div className="flex sm:flex sm:flex-col gap-12 w-45">
                <div className="flex flex-col gap-5">
                  <div className="sm:flex sm:justify-between sm:w-80 sm:items-center">
                    <h1 className="font-semibold lg:text-2xl text-lg">
                      Popüler {itemName}
                    </h1>
                    <span onClick={mainHandler} className="md:hidden lg:hidden text-2xl border border-solid border-black rounded-full px-3 text-center text-red-600">X</span>
                  </div>
                  {populerFilms.map((item, index) => (
                    <MenuFilms
                      key={`populer-${index}`}
                      img={item.img}
                      img_sub={item.img_sub}
                      name={item.name}
                      kind={item.kind}
                    ></MenuFilms>
                  ))}
                </div>

                <div className="flex flex-col gap-5">
                  <h1 className="font-semibold lg:text-2xl text-lg sm:whitespace-nowrap">
                    Vizyondaki {itemName}
                  </h1>
                  {visionFilms.map((item, index) => (
                    <MenuFilms
                      key={`vision-${index}`}
                      img={item.img}
                      img_sub={item.img_sub}
                      name={item.name}
                      kind={item.kind}
                      desc={item.desc}
                    ></MenuFilms>
                  ))}
                </div>
              </div>
              <div className="flex sm:flex-col justify-between lg:w-55 sm:w-full sm:items-center lg:pl-12 sm:mt-8 sm:gap-12">
                <MenuCinemas itemName={itemName}></MenuCinemas>
                <MenuExpectedFilm
                  expected_img_url={moonfall}
                  expected_img_sub="moonfall"
                  expected_film_name="Moonfall"
                  expected_film_sub="14 Mart 2022’de Vizyonda"
                  itemName={itemName}
                ></MenuExpectedFilm>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12 w-55 sm:w-full sm:gap-4">
              <button className=" w-128 h-auto lg:w-306 lg:h-12 bg-menu-button border-none rounded font-medium lg:text-lg text-base">
                Tüm Filmler &amp; Sinemalar
              </button>
              <span className="lg:text-sm text-xs">
                Şehriniz <b className=" font-semibold">Bursa</b> olarak seçili.
                Site içeriği Bursa’ya göre değişmektedir. <br /> Şehrinizi
                değiştirmek isterseniz
                <a href="/" className="text-menu-link">
                  {" "}
                  buraya tıklayın.
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
