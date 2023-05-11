import { useState } from "react";
import { Syne } from "next/font/google";
import Image from "next/image";
import BlueLogo from "./assets/blueLogo.png";
import Logo from "./assets/logo.png";
import Link from "next/link";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
});
const Navbar = ({ isWhite }) => {
  const [hamMenu, setHamMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between mb-auto z-10">
      <div className="flex gap-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            weight={20}
            height={20}
            alt="logo"
            src={isWhite ? Logo : BlueLogo}
          />
          Cyber Surakshit
        </Link>

        <Link className="hidden sm:inline" href="/about">About</Link>
        <Link className="hidden sm:inline" href="/privacypolicy">Privacy Policy</Link>
      </div>

      <div>
        {!isWhite && <button
          className={`${syne.className} bg-blue px-10 py-2 text-white rounded-md hover:bg-opacity-80 duration-200 shadow-md hidden md:inline`}
        >
          <Link href="https://chat.cybersurakshit.org">KABIR</Link>
        </button>}
        <button className="bg-black text-white px-10 py-2 rounded-md hover:bg-opacity-60 duration-200 ml-10 shadow-md hidden md:inline">
          Chat on Whatsapp
        </button>

        <RxHamburgerMenu
          onClick={() => setHamMenu(true)}
          className="md:hidden text-4xl cursor-pointer hover:bg-black hover:bg-opacity-30 p-1 rounded-sm duration-200"
        />

        <div
          className={`absolute w-full top-0 left-0 bg-white text-black px-5 py-3 pt-[40px] flex-col gap-6 ${
            hamMenu ? "flex" : "hidden"
          } shadow-md`}
        >
          <RxCross1
            onClick={() => setHamMenu(false)}
            className="absolute text-4xl p-1 top-6 right-10 cursor-pointer"
          />
          <Link className="block" href="/about">
            {" "}
            About{" "}
          </Link>
          <Link className="block" href="/privacypolicy">
            {" "}
            Privacy Policy{" "}
          </Link>

          <button
            className={`${syne.className} bg-blue px-10 py-2 text-white rounded-md hover:bg-opacity-80 duration-200 shadow-md w-1/2`}
          >
            KABIR
          </button>

          <button className="bg-black px-3 py-2 rounded-md hover:bg-opacity-60 duration-200 w-1/2 text-white">
            Chat on Whatsapp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
