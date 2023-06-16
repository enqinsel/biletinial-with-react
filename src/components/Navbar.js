import Categories from "./Categories";
import LocationTab from "./LocationTab";
import Searchbox from "./Searchbox";

function Navbar() {
  return (
    <div className="w-full lg:flex sm:flex-col sm:flex sm:justify-center sm:items-center lg:items-center lg:justify-between p-3 border-b-2 border-solid border-card-border lg:bg-white fixed top-0 z-50 bg-white gap-6 lg:gap-0" >
      <LocationTab></LocationTab>
      <div className="hidden lg:block">
        <Categories></Categories>
      </div>
      <Searchbox></Searchbox>
    </div>
  );
}

export default Navbar;
