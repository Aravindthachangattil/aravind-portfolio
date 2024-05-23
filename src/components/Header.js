import React, { useState, useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/logo.png";
import Switcher from "../components/switcher";
import { switchLink } from "../store/routeSlice";
import { navLink } from "../constant/data";
import { Link } from "react-router-dom";

export default function Header() {

  const {link} = useSelector((state)=>state.route)
  console.log(link)
  const dispatch = useDispatch();
  const [scrolling, setScrolling] = useState(false);
  const [dropdownVisible, isDropdownVisible] = useState(false);

  // function scrollingActive() {

  // }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <header
      style={{
        backgroundColor: `${
          scrolling ? "rgb(255 255 255 / 11%)" : "transparent"
        }`,
      }}
      className=" md:flex backdrop-blur-md  items-center fixed top-0 lg:top-4  justify-between w-full lg:w-auto  xl:left-[14%] lg:left-[10%] xl:right-[14%] lg:right-[10%] md:pl-1 md:pr-3 lg:rounded-full md:h-20  mb-5 z-30 transition ease-linear "
    >
      <div className="w-full logo px-5 py-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-">
        <img src={logo} class="w-10 pl-1" alt="logo" />
        <h3 class="font-sans font-semibold text-lg text-white dark:text-[#1C1C22] hidden md:flex">
          Aravind
        </h3>
        </div>

        <div className="flex align-items-center gap-3 lg:hidden">
        <Switcher />
        <li className={`hamburger flex items-center `}   onClick={() => {isDropdownVisible(!dropdownVisible); }}>
                        <button class="menu__icon">
                          <span className="dark:bg-black"></span>
                          <span className="dark:bg-black"></span>
                          <span className="dark:bg-black"></span>
                        </button>
      </li>
        </div>
      </div>

      {/* desktop view  */}
      <ul className="hidden lg:flex items-center gap-8 text-white dark:text-[#1C1C22] bg-black md:bg-transparent relative top-0">
        {navLink?.map((links) => (
           <a href={links.link}  className={`py-[6px] px-3 rounded-md my-3 font-[500] font-serif text-md `} onClick={()=>dispatch(switchLink(links.link))}>{links.name} </a>
        ))}
        <li className="hidden lg:flex">
        <Switcher />
        </li>
      </ul>
      
      {/* mobile view  */}
      <ul
        className={`"lg:hidden rounded-md  items-center py-4 text-white bg-black dark:bg-white dark:text-black :bg-transparent absolute w-100 h-screen left-0 right-0 top-0 z-30 " ${
          dropdownVisible ? "flex flex-col" : "hidden"
        }`}
      >
     <li className={` relative mb-14  w-full`}   onClick={() => {isDropdownVisible(!dropdownVisible); }}>
    <svg className="dark:fill-black fill-white absolute w-12 h-12 rounded-full flex items-center justify-center right-4  p-3" width="" height="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414z"/>
    </svg>
      </li>
      
     <li className={`py-[8px] px-3 mx-2 font-[500] font-serif text-sm`}   onClick={() => {isDropdownVisible(!dropdownVisible); }}>
        <a href='#home'>Home</a>
      </li>
     <li className={`py-[8px] px-3 mx-2 font-[500] font-serif text-sm`}   onClick={() => {isDropdownVisible(!dropdownVisible); }}>
     <a href='#about'>About</a>
      </li>
     <li className={`py-[8px] px-3 mx-2 font-[500] font-serif text-sm`}   onClick={() => {isDropdownVisible(!dropdownVisible); }}>
     <a href='#experience'>  Experience</a>
      </li>
     <li className={`py-[8px] px-3 mx-2 font-[500] font-serif text-sm`}   onClick={() => {isDropdownVisible(!dropdownVisible); }}>
     <a href='#projects'>  Project</a>
      </li>
     <li className={`py-[8px] px-3 mx-2 font-[500] font-serif text-sm`}   onClick={() => {isDropdownVisible(!dropdownVisible); }}>
     <a href='#contact'>    Contact Us</a>
      </li>
      </ul>
    </header>
  
  );
}
