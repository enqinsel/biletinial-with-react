import search_icon from "../assets/images/search-icon.svg";
import search_menu from "../assets/images/search-menu-logo.svg";
import arrow from "../assets/images/profile-arrow-logo.svg";
import profile_logo from "../assets/images/profile-logo.svg";

function Searchbox() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-around gap-20 w-80 h-11 p-1 bg-searchbox  border rounded shadow-inner border-solid border-cardOne-bg">
        <div className="flex items-center justify-around gap-3">
          <img src={search_icon} alt="search-icon" />
          <input
            className="w-36 bg-transparent border-none placeholder:text-sm outline-none"
            type="text"
            placeholder="Search in this sport..."
          />
        </div>
        <img className="" src={search_menu} alt="search-menu" />
      </div>
      <div className="flex items-center cursor-pointer">
        <img src={arrow} alt="arrow" />
        <img src={profile_logo} alt="profile-logo" />
      </div>
    </div>
  );
}

export default Searchbox;
