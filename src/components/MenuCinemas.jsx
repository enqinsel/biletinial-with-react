import cinens from "../assets/images/cinens-logo.svg";
import cinema_pink from "../assets/images/cinema-pink.svg";
import avsar from "../assets/images/avsar-logo.svg";
import cinetech from "../assets/images/cinetech.svg";
import cinemarine from "../assets/images/cinemarine.svg";
import cinetime from "../assets/images/cinetime.svg";

function MenuCinemas({itemName}) {
  const cinemasData = [
    {
      cinemas_img: cinens ,
      cinemas_img_sub: "cinens",
      cinemas_name: "Cinens",
    },
    {
      cinemas_img: cinema_pink,
      cinemas_img_sub: "cinema_pink",
      cinemas_name: "Cinema Pink",
    },
    {
      cinemas_img: avsar,
      cinemas_img_sub: "avsar",
      cinemas_name: "Avsar",
    },
    {
      cinemas_img: cinetech,
      cinemas_img_sub: "cinetech",
      cinemas_name: "Cinetech",
    },
    {
      cinemas_img: cinemarine,
      cinemas_img_sub: "cinemarine",
      cinemas_name: "Cinemarine",
    },
    {
      cinemas_img: cinetime ,
      cinemas_img_sub: "cinetime",
      cinemas_name: "Cinetime",
    },
    {
      cinemas_img: cinens,
      cinemas_img_sub: "cinens",
      cinemas_name: "Cinens",
    },
    {
      cinemas_img: cinema_pink ,
      cinemas_img_sub: "cinema_pink",
      cinemas_name: "Cinema Pink",
    },
  ];
  
  return (
    <div className="w-55 sm:w-full">
      <p className="lg:text-2xl text-lg sm:whitespace-nowrap font-semibold sm:text-center">Şehrindeki Popüler {itemName}</p>
        <ul className="flex flex-wrap gap-2 p-0 m-0">
        {cinemasData.map((item, index) => (
          <li key={index}  className="flex flex-col items-center gap-2 pt-4">
            <div className="flex w-24 h-16 bg-white border border-solid border-select rounded p-1">
              <img className=" max-w-full max-h-full" src={item.cinemas_img} alt={item.cinemas_img_sub} />
            </div>
            <span className="text-sm">{item.cinemas_name}</span>
          </li>
          ))}
        </ul>
      
    </div>
  );
}

export default MenuCinemas;
