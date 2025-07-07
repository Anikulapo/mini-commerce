"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [flip, setFlip] = useState(false);
  const [search, setSearch] = useState("");

  const handleFlip = (): void => {
    setFlip(!flip);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Disable/enable scrolling when menu is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  //     useEffect(() => {
  //     if (search.trim() !== "") {
  //       const results = items.filter((item) =>
  //         item.title.toLowerCase().includes(search.toLowerCase())
  //       );
  //       setFilteredItems(results);
  //     } else {
  //       setFilteredItems([]);
  //     }
  //   }, [search]);

  return (
    <header className=" px-[5%] pt-4 pb-4 fixed  w-full z-50 bg-white text-black">
      {/* Desktop Nav */}
      <nav className="z-50 hidden md:flex items-center justify-between bg-white">
        <h1 className="font-pop lg:text-3xl font-bold md:text-[18px] hover:cursor-pointer">
          MINI COMMERCE
        </h1>
        <ul className="flex gap-6 items-center justify-center pt-2">
          <li
            onClick={handleFlip}
            className="group flex items-center gap-2 font-al text-[12px] lg:text-[16px] relative pb-2 hover:cursor-pointer"
          >
            Shop
            <Image
              className={`group-hover:scale-y-[-1] transition-transform duration-400 ease-in-out ${
                flip ? "scale-y-[-1]" : "scale-y-[1]"
              } `}
              src="/images/flip.svg"
              alt="arrow"
              width={16}
              height={16}
              priority
            />
            <ul
              className={`absolute top-[100%] left-0 bg-white shadow-sm p-4 rounded-xl lg:hidden group-hover:block ${
                flip ? "block" : "hidden"
              } `}
            >
              <li className="group font-al text-[14px] p-2 hover:bg-black transition-colors duration-300 rounded-xl hover:text-white mb-2">
                <a href=""> Men </a>
              </li>
              <li className="group font-al text-[14px] p-2 hover:bg-black transition-colors duration-300 rounded-xl hover:text-white">
                <a href="">Women</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href=""
              className="group flex items-center gap-2 font-al text-[12px] lg:text-[16px] relative pb-2"
            >
              On Sale
            </a>
          </li>
          <li>
            <a
              href=""
              className="group flex items-center gap-2 font-al text-[12px] lg:text-[16px] relative pb-2"
            >
              Top Rated
            </a>
          </li>
        </ul>

        <form action="" className="">
          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
              focus:outline-none focus:ring-0 focus:border-gray-300
                text-[rgba(0,0,0,0.4)]
              focus:bg-gray-200
              max-w-[560px]  lg:min-w-[300px] xl:min-w-[530px]  
              md:pt-1 md:pb-2
              lg:pt-2 lg:pb-[10px] w-full text bg-[#F0F0F0] rounded-full pl-10 placeholder: focus-visible:"
              type="text"
              placeholder="Search for products... "
            />
            <Image
                 className="absolute top-[50%] transform translate-y-[-50%] left-3"
                src="/images/searchW.svg"
                alt="search icon"
                width={24}
                height={24}
                priority
              />
          </div>
        </form>

        <ul className="flex items-center gap-2">
          <li>
            <Image
                className="md:w-4 lg:w-6"
                src="/images/cart.svg"
                alt="cart icon"
                width={24}
                height ={24}
                priority
              />
          </li>
          <li>
            <button
              className={` 
                            right-2   z-50 p-2 rounded-full 
                            transition-colors duration-300 focus:outline-hidden cursor-pointer
                        `}
            >
              {!isOpen ? (
                <Sun className="lg:h-6 lg:w-6 md:w-4" />
              ) : (
                <Moon className="lg:h-6 lg:w-6 md:w-4" />
              )}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className="z-30 md:hidden bg-white w-full">
        <div className="flex items-center justify-between md:hidden bg-white z-50 w-full  fixed top-0 left-0 px-[5%] pt-4 pb-4">
          <div className="flex items-center gap-5 z-20">
            <button
              onClick={handleClick}
              className={`z-50 md:hidden relative ${isOpen ? "top-[3px]" : ""}`}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={` stroke-[3] transition-all duration-300 origin-center
                    stroke-black
            
                    ${isOpen ? "rotate-45 translate-y-[3px]" : ""}`}
                />
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={` stroke-[3] transition-all duration-300
                    stroke-black
            
                    ${isOpen ? "opacity-0" : "opacity-100"}`}
                />
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={` stroke-[3] transition-all duration-300 origin-center
                    stroke-black
                    ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
                />
              </svg>
            </button>
            <h1 className="font-pop font-bold">MINI COMMERCE</h1>
          </div>
          <ul className="flex items-center gap-2 z-20">
            <li>
              <Image
                className=""
                src="/images/search.svg"
                alt="search icon"
                width={16}
                height={16}
                priority
              />
            </li>
            <li>
              <Image
                className="md:w-4 lg:w-6"
                src="/images/cart.svg"
                alt="cart icon"
                width={16}
                height={16}
                priority
              />

            </li>
            <li>
              <button
                className={`
                                right-2   z-50 p-2 rounded-full
                                transition-colors duration-300 focus:outline-hidden cursor-pointer
                            `}
              >
                {!isOpen ? (
                  <Sun className="lg:h-6 lg:w-6 md:w-4" />
                ) : (
                  <Moon className="lg:h-6 lg:w-6 md:w-4" />
                )}
              </button>
            </li>
          </ul>
        </div>

        {/* Open Menu */}

        <div
          className={`bg-[rgba(0,0,0,0.9)] w-full h-screen absolute top-0 left-0 z-10 transition-all duration-400 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        ></div>
        <div
          className={`bg-[#F0F0F0] w-3/4 h-screen absolute top-0 left-0 z-20 transition-all duration-400 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul
            className={`flex flex-col items-center justify-center gap-6 h-screen text-black text-[18px] font-al transition-all duration-400 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <li onClick={handleFlip} className=" ">
              <div className="text-left flex items-center gap-2">
                Shop
                <Image
                  className={`group-hover:scale-y-[-1] transition-transform duration-400 ease-in-out ${
                    flip ? "scale-y-[-1]" : "scale-y-[1]"
                  } `}
                  src="/images/flip.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  priority
                />
              </div>
              <ul
                className={`top-[100%] left-0 p-4 rounded-xl lg:hidden group-hover:block ${
                  flip ? "block" : "hidden"
                } `}
              >
                <li className="group font-al text-[14px] p-2 mb-2">
                  <a href=""> Men </a>
                </li>
                <li className="group font-al text-[14px] p-2  transition-colors duration-300 rounded-xl ">
                  <a href="">Women</a>
                </li>
              </ul>
            </li>
            <li className="hover:cursor-pointer hover:text-gray-400 text-left">
              <a href="">On Sale</a>
            </li>
            <li className="hover:cursor-pointer hover:text-gray-400 text-left">
              <a href="">Top Rated</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
