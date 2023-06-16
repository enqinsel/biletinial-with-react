import down_tik from "../assets/images/down-tik.svg";
import React, { useState, useEffect, useMemo } from "react";

function LocationMenu({ isHidden, cancelClick }) {

  // data nesnesi her yeniden render edildiğinde değişmemesini sağlanır
  const data = useMemo(() => ({
    Türkiye: {
      cities: [
        "İstanbul Avrupa",
        "İstanbul Anadolu",
        "Bursa",
        "Ankara",
        "Eskişehir",
        "İzmir",
        "Adana",
        "Afyon",
        "Ağrı",
        "Aksaray",
        "Amasya",
        "Antalya",
      ],
    },
    ABD: {
      cities: [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
        "Austin",
        "Jacksonville",
      ],
    },
    Fransa: {
      cities: [
        "Paris",
        "Marseille",
        "Lyon",
        "Toulouse",
        "Nice",
        "Nantes",
        "Strasbourg",
        "Montpellier",
        "Bordeaux",
        "Lille",
        "Rennes",
        "Reims",
      ],
    },
  }), []);

  // kullanıcının ülke listesini açıp kapatmasını kontrol etmek için
  const [isCountryListOpen, setIsCountryListOpen] = useState(false);
  const [isBorder, setIsBorder] = useState(true);

  // seçilen ülkeyi tutmak için
  const [selectedCountry, setSelectedCountry] = useState("Türkiye");
  // seçilen ülkenin şehirlerini tutmak için
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    // seçilen ülke için şehirleri getirir
    const countryInfo = data[selectedCountry];

    // güncelleme
    if (countryInfo) {
      const cities = countryInfo.cities;
      setCountryData(cities);
    } else {
      setCountryData([]);
    }
  }, [selectedCountry, data]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryListOpen(false);
    setIsBorder(!isBorder);
  };

  return (
    <div
      className={`${
        isHidden ? "hidden" : "block"
      } fixed bg-white overflow-y-auto h-screen top-77 left-0 select w-400`}
    >
      <div className="-z-10 w-full h-full bg-current fixed top-77 left-0 opacity-50 cursor-pointer" onClick={cancelClick}></div>
      <div className="z-20 bg-white ">
        <div className="flex justify-around items-center border-b border-solid border-select gap-1 p-5">
          <p className="text-xl">Choose your city and continue the fun.</p>
          <button
            className="p-3 rounded text-sm border border-solid border-select"
            onClick={cancelClick}
          >
            Cancel
          </button>
        </div>
        <div className="p-5 mt-2 relative">
          <div className="relative">
            <span className="font-bold text-lg">Select Country</span>
            <div
              className={`flex justify-between items-center px-2 py-4 gap-2 mt-2 ${
                isBorder ? "border" : "border-t border-l border-r"
              } border-solid border-select rounded cursor-pointer`}
              onClick={() =>
                setIsCountryListOpen(!isCountryListOpen, setIsBorder(!isBorder))
              }
            >
              <span className="text-sm">
                {selectedCountry || "Select a country"}
              </span>
              <div className="flex item-center gap-2">
                <span className="text-xs text-current">Current</span>
                <img className="w-3" src={down_tik} alt="down-tik" />
              </div>
            </div>
            {isCountryListOpen && (
              <ul className="bg-white border-x border-b border-solid border-select p-2 cursor-pointer absolute w-full">
                {Object.keys(data).map((country) => (
                  <li
                    className=" leading-9 border-b border-solid border-select last:border-none"
                    key={country}
                    onClick={() => handleCountrySelect(country)}
                  >
                    {country}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul className="p-0">
            {countryData.map((city, index) => (
              <li
                key={index}
                className="text-base border-b border-solid border-border-li leading-68"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LocationMenu;
