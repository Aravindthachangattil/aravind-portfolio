import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare, FaWhatsappSquare } from "react-icons/fa";
// import { navLink } from "../constant/data";
import AbouImg from "../images/Img.png";

export default function Hero() {
  return (
    <div
      className="xl:px-52 lg:px-28 md:px-16 px-5 lg:pt-32 pt-24  xl:pb-7 lg:pb-9 pb-10"
      id="home"
    >
      <div className="grid lg:grid-cols-2  place-items-center md:gap-5 gap-5 lg:mb-10">
        <div className="flex order-2 lg:order-1 flex-col text-center lg:text-start justify-center  gap-5">
          <div className="flex items-center md:justify-center gap-1 w-fit mx-auto md:mx-0">
            <div className="w-8 h-[2px] bg-white dark:bg-black/80 rounded-md hidden md:flex"></div>
            <h2 className="md:text-lg font-serif text-sm font-normal dark:text-[#1C1C22] text-white md:leading-[1.2]">
              Hello I'am
            </h2>
          </div>

          <h2 className="md:text-5xl  text-3xl font-bold dark:text-[#1C1C22] text-white md:leading-[1.2]">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-amber-400">
              ARAVIND T{" "}
            </span>
          </h2>
          <h2 className="md:text-xl font-serif text-xl font-medium dark:text-[#1C1C22] text-white md:leading-[1.2]   px-5 md:px-0">
            UI / UX DESIGNER.
          </h2>
          <div className="flex  flex-col gap-3 mx-auto md:mx-0">
            <div className="flex flex-col gap-3 justify-center w-fit ">
              <a href="#contact" className="flex font-serif items-center justify-center gap-3 bg-white dark:bg-[#1C1C22] w-fit px-8 py-3 rounded-full md:h-[45px] text-gray-900 dark:text-white md:font-[600] font-[500] md:text-md text-sm hover:bg-transparent outline hover:outline-1 hover:text-white dark:hover:bg-white transition-all ease-linear dark:hover:text-gray-900">
                Conatct Info
              </a>
              <div className="flex items-center justify-center gap-4 text-xl md:text-2xl">
                <a
                  href="https://www.linkedin.com/in/aravindtofficial?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white dark:text-black/90"
                  target="blank"
                >
                  {" "}
                  <FaLinkedin />
                </a>
                <a href="https://www.behance.net/aravindthachangattil" className="text-white dark:text-black/90" target="blank">
                  {" "}
                  <FaBehanceSquare />
                </a>
                <a href="whatsapp://send?phone=9605597646" className="text-white dark:text-black/90">
                  <FaWhatsappSquare />
                </a>
              </div>

            </div>
          </div>


        </div>
        <img
          src={AbouImg}
          className="order-1 lg:order-2 mx-auto pt-3 md:pt-0 lg:w-[30em] md:w-[18em] w-[13rem]"
          alt="profileImage"
        />
      </div>
    </div>
  );
}
