import Logo from "./logo.png";
import Avatar from "./avatar.png";
import {
  SearchIcon,
  BellIcon,
  ChatIcon,
  PlusIcon,
  ChevronDownIcon,
  UserIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import Button from "./Button";
import { useState } from "react"; //useEffect, useRef;
import ClickOutHandler from "react-clickout-handler";

function Header() {
  const [userDropdownvisibilityClass, setUserDropdownvisibilityClass] =
    useState("hidden");

  // function useUserDropdown(ref) {
  //   useEffect(() => {
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         setUserDropdownvisibilityClass("hidden");
  //       }
  //     }
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }
  // const userDropdownRef = useRef(null);
  // useUserDropdown(userDropdownRef);

  function toggleUserDropDown() {
    if (userDropdownvisibilityClass === "hidden") {
      setUserDropdownvisibilityClass("block");
    } else {
      setUserDropdownvisibilityClass("hidden");
    }
  }

  return (
    <header className="w-full bg-reddit_dark p-2">
      <div className="mx-4 flex relative">
        <img src={Logo} alt="" className="w-8 h-8 bg-reddit_dark mr-4" />
        <form
          action=""
          className="bg-reddit_dark-brighter p-1 px-3 rounded-md border border-reddit_border flex mx-4 flex-grow">
          <SearchIcon className="text-gray-300 h-6 w-6 mt-1 " />
          <input
            type="text"
            className="bg-reddit_dark-brighter text-sm p-1 pr-0 pl-2 block focus:outline-none text-white"
            placeholder="Search"
          />
        </form>
        {/* <button className="px-2 py-1">
          <ChatIcon className="text-gray-400 w-6 h-6 m-1 mx-2" />
        </button>
        <button className="px-2 py-1">
          <BellIcon className="text-gray-400 w-6 h-6 m-1 mx-2" />
        </button>
        <button className="px-2 py-1">
          <PlusIcon className="text-gray-400 w-6 h-6 m-1 mx-2" />
        </button> */}

        <div className="mx-2 hidden sm:block">
          <Button outline className="mr-1">
            Log In
          </Button>
          <Button className="">Sign Up</Button>
        </div>
        <ClickOutHandler
          onClickOut={() => setUserDropdownvisibilityClass("hidden")}>
          <button
            className="rounded-md flex ml-4 border border-gray-700"
            onClick={() => toggleUserDropDown()}>
            {/* ref={userDropdownRef} */}
            <UserIcon className="w-6 h-6 text-gray-400 m-1" />
            {/* <div className="bg-gray-600 w-8 h-8 rounded-md">
            <img
              src={Avatar}
              alt=""
              style={{ filter: "invert(100%" }}
              className="block w-8 h-8"
            />
          </div> */}
            <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 m-1" />
          </button>
        </ClickOutHandler>
        <div
          className={
            "absolute right-0 bg-reddit_dark top-8 border border-gray-700 z-10 rounded-md text-reddit_text overflow-hidden " +
            userDropdownvisibilityClass
          }>
          <button
            href=""
            className="block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black">
            <LoginIcon className="w-5 h-5 mr-2" />
            Log In/Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
