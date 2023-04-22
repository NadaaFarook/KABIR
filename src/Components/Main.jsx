"use client";
import React, { useState } from "react";
import {  Syne } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "./assets/logo.png";
import Bot from "./assets/bot.png";
import Pfp from "./assets/pfp.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
});

const Main = () => {
  const [hamMenu, setHamMenu] = useState(false);
  
  return (
    <div
      className={` min-h-screen min-w-screen bg-blue text-white px-10 md:px-20 lg:px-40 pt-5 md:pt-10 overflow-hidden`}
    >
      <nav className="flex items-center justify-between">
        <div className="flex gap-10">
          <Link href="/" className="flex items-center gap-3">
            <Image weight={20} height={20} alt="logo" src={Logo} /> Cyber Surakshit </Link>

          <Link className="hidden sm:inline" href="/about"> About </Link>
          <Link className="hidden sm:inline" href="/privacypolicy"> Privacy Policy </Link>
        </div>

        <button className="bg-black px-10 py-2 rounded-md hover:bg-opacity-60 duration-200 hidden sm:inline">
          Chat on Whatsapp
        </button>

        <RxHamburgerMenu onClick={() => setHamMenu(true)} className="sm:hidden text-4xl cursor-pointer hover:bg-black hover:bg-opacity-50 p-1 rounded-sm duration-200" />
      </nav>

      <div
        className={`absolute w-full top-0 left-0 bg-white text-black px-5 py-3  flex-col gap-3 ${ hamMenu ? "flex" : "hidden"}`}>
        <RxCross1 onClick={() => setHamMenu(false)} className="absolute top-3 right-5 cursor-pointer" />
        <Link className="block" href="/about">  About </Link>
        <Link className="block" href="/privacypolicy"> Privacy Policy </Link>

        <button className="bg-black px-3 py-2 rounded-md hover:bg-opacity-60 duration-200 w-1/2 text-white">
          Chat on Whatsapp
        </button>
      </div>

      <div className="flex md:justify-between items-center flex-col md:flex-row ">
        <div className="mt-10 md:mt-1">
          <h1 className={`${syne.className} text-6xl text-center md:text-left`}>
            KABIR
          </h1>
          <p className="md:w-3/4 opacity-70 mt-4 text-center md:text-left">
            Knowledgeable Artificial Intelligence Bot for Investigating and
            Resolving cybercrimes
          </p>

          <div className="hidden md:block ">
            <button className="bg-white text-black px-20 py-3 rounded-md mt-10 font-medium shadow-md">
              GET STARTED
            </button>

            <p className="mt-12">Already helped more than 1000+ users 💙</p>

            <div className="flex gap-3 mt-5 w-3/4 flex-wrap">
              <Image src={Pfp} />
              <Image src={Pfp} />
              <Image src={Pfp} />
              <Image src={Pfp} />
              <Image src={Pfp} />
              <Image src={Pfp} />
              <Image src={Pfp} />
              <Image src={Pfp} />
              <Image src={Pfp} />
            </div>
          </div>
        </div>

        <Image
          className="w-[350px] h-[450px] md:w-[500px] md:h-[600px]"
          alt="Bot"
          src={Bot}
        />
        <button className="bg-white text-black px-20 py-3 rounded-md -mt-2 font-medium shadow-md md:hidden">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Main;
