import React from 'react'
import { BsTwitter, BsGithub } from "react-icons/bs";
import { images } from '../../constants/images';

function Header() {
  return (
    <div
      className="w-full px-6 py-4 z-20 absolute flex justify-between"
    >
      <div className="flex gap-2 items-center">
        <img className="w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12" src={images.logo} alt="logo" />
        <span
          className="font-[Urbanist] text-[22px] md:text-[35px] lg:text-[42px] font-bold text-white"
        >
          TowneSquare
        </span>
      </div>
      <div className="flex gap-4 md:gap-8 items-center">
        <div className="w-6 md:w-8 h-6 md:h-8">
          <a href="https://twitter.com/TowneSquarexyz">
            <BsTwitter
              size="auto"
              style={{
                color: "#F2F0FF",
              }}
            />
          </a>
        </div>
        <div className="w-6 md:w-8 h-6 md:h-8">
          <a href="https://github.com/TowneSquare">
            <BsGithub
              size="auto"
              style={{
                color: "#F2F0FF",
              }}
            />
          </a>
        </div>
        <button
          className="hidden md:block px-6 py-2 text-[18px] text-black font-semibold bg-white hover:bg-[#CCCCCC] active:bg-[#AAAAAA] rounded-full cursor-pointer"
        >
          Get early access
        </button>
      </div>
    </div>
  )
}

export default Header