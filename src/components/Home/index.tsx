import React, { useState } from 'react'
import { images } from '../../constants/images';
import { BsTwitter } from 'react-icons/bs';

const Home = () => {
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const onMouseMove = (e: any) => {
    const percentX = (window.innerWidth / 2 - e.clientX) / (window.innerWidth / 2);
    const percentY = (window.innerHeight / 2 - e.clientY) / (window.innerHeight / 2);

    const maxOffset = 30;
    setOffset({ left: maxOffset * percentX, top: maxOffset * percentY });
  }

  return (
    <div
      className="relative bg-black"
      onMouseMove={(e) => onMouseMove(e)}
    >
      <div className="absolute z-0 w-full  hidden lg:block">
        <img src="/images/home/left_web.svg" alt="background" className="top-0 left-0" />
        <img src="/images/home/right_web.svg" alt="background" className="absolute top-0 right-0" />
        <img src="/images/home/right1_web.svg" alt="background" className="absolute top-0 right-0" />
      </div>
      <div className="absolute z-0 w-full  hidden md:block lg:hidden">
        <img src="/images/home/left_tablet.svg" alt="background" className="top-0 left-0" />
        <img src="/images/home/right_tablet.svg" alt="background" className="absolute top-[40vh] right-0" />
      </div>
      <div className="absolute z-0 w-full  block md:hidden">
        <img src="/images/home/left_mobile.svg" alt="background" className="top-0 left-0" />
        <img src="/images/home/right_mobile.svg" alt="background" className="absolute top-[20vh] right-0" />
      </div>
      <div className="pt-24 lg:pt-32 pb-8 lg:pb-32 relative z-10">
        <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row gap-8 lg:gap-32 items-center justify-center px-4">
          <div className="flex flex-col gap-6 max-w-[800px] md:pr-10 lg:pr-0">
            <span className="text-[40px] md:text-[48px] lg:text-[56px] font-bold">
              <span className="text-[#00EEFD]">The Web3 ”everything” app</span>
              <br />you have been waiting for
            </span>
            <span className="text-[24px] lg:text-[32px] font-medium ">
              By “everything”, we mean social, payments, community space, discover your favorite content & digital items – all in one place.
            </span>
            <div className="self-start md:self-auto lg:self-start">
              <div className="p-4 lg:p-6 flex flex-col lg:flex-row gap-4 lg:gap-0 text-xl font-semibold border border-1 border-[#666] rounded-xl bg-[#00000033]">
                Coming soon on &nbsp;
                <div className="flex">
                  <img src="/images/home/android_logo.svg" className="w-6" alt="logo" />
                  &nbsp;Android and&nbsp;
                  <img src="/images/home/ios_logo.svg" className="w-6" alt="logo" />
                  &nbsp;iOS
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <button
                className="px-2 md:px-4 lg:px-8 h-12 text-[18px] text-black font-semibold bg-white hover:bg-[#CCCCCC] active:bg-[#AAAAAA] rounded-full whitespace-nowrap"
              >
                Get early access
              </button>
              <button
                className="px-2 md:px-4 lg:px-6 h-12 flex items-center text-[18px] text-white font-semibold  hover:bg-[#FFFFFF33] active:bg-[#FFFFFF66] border-2 border-white rounded-full whitespace-nowrap"
              >
                Follow us on
                <BsTwitter
                  size={38}
                  style={{
                    color: "#009EF7",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                  }}
                />
                <span className="hidden lg:block">Twitter</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center min-w-[300px] relative">
            <img
              src="/images/home/glass.svg" alt="glass"
              className="absolute -right-2 -top-2 ease-in"
              style={{
                left: offset.left,
                top: offset.top
              }}
            />
            <img src="/images/home/feed.svg" alt="feed" className="z-10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home