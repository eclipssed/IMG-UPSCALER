"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { usePathname } from "next/navigation";

const mobileNavLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/aboutUs",
    title: "About us",
  },
  {
    href: "/colorizeScreen",
    title: "Colorize Screen",
  },
  {
    href: "/blurScreen",
    title: "Blur Screen",
  },
  {
    href: "/backgroundRemoveScreen",
    title: "Background Remove Screen",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/pricing",
    title: "Pricing",
  },
  {
    href: "/signIn",
    title: "Sign In",
  },
  {
    href: "/signUp",
    title: "Sign Up",
  },
];
const navLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/aboutUs",
    title: "About us",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/pricing",
    title: "Pricing",
  },
  {
    href: "/",
    title: "Tools",
  },
  // {
  //   href: "/signIn",
  //   title: "Sign In",
  // },
  // {
  //   href: "/signUp",
  //   title: "Sign Up",
  // },
];

const toolsData = [
  {
    title: "Colorize Screen",
    href: "/colorizeScreen",
  },
  {
    title: "Blur Screen",
    href: "/blurScreen",
  },
  {
    title: "Background Remove Screen",
    href: "/backgroundRemoveScreen",
  },
];
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTools, setShowTools] = useState(false);
  // const [logo, setLogo] = useState("");
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-lightGray w-full">
      <div
        className={` py-4 z-10 relative ease-out duration-100 ${
          isSticky ? " ease-in sticky top-0 left-0 right-0  bg-opacity-80" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between mx-auto py-4 px-6 md:px-16 duration-300`}
        >
          <Link href={"/"} className="text-2xl md:text-4xl font-bold">
            <span className="text-primary">ImgUpscaler</span>
          </Link>
          {/* menu for large devices */}
          <div className=" hidden lg:block md:w-auto" id="navbar">
            <div className=" flex gap-4 items-center justify-center">
              <ul className="flex p-2 md:space-x-8 mt-0 mr-32">
                {navLinks.map((link, index) =>
                  link.title === "Tools" ? (
                    <div className="flex flex-col gap-2" key={index}>
                      <div className="bg-lightGray absolute rounded-lg">
                        <div
                          onClick={() => setShowTools((prev) => !prev)}
                          href={link.href}
                          className="text-black pl-3 pr-4 sm:text-xl rounded md:p-0 flex hover:cursor-pointer items-center  gap-2"
                        >
                          {link.title}
                          <span>
                            {showTools ? <IoIosArrowUp /> : <IoIosArrowDown />}
                          </span>
                        </div>
                        <div
                          className={`${
                            showTools
                              ? " rounded-lg mt-4 border-t-4 border-t-primary "
                              : ""
                          }`}
                        >
                          {showTools &&
                            toolsData.map((tool) => (
                              <Link
                                onClick={() => setShowTools(false)}
                                href={tool.href}
                                className="block text-black py-3 pl-3 pr-4 sm:text-xl border border-darkGray  rounded"
                              >
                                {tool.title}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <li
                      key={index}
                      className={` ${
                        pathname === link.href
                          ? "border-b-2 border-b-primary pb-1"
                          : ""
                      }`}
                    >
                      <NavLink href={link.href} title={link.title} />
                    </li>
                  )
                )}
              </ul>
              <div className="flex items-center gap-4 relative  justify-center">
                <button className="btn">
                  <NavLink href={"/signIn"} title={"Sign In"} />
                </button>
                <button className="btn">
                  <NavLink href={"/signUp"} title={"Sign Up"} />
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden ">
            <div
              onClick={toggleMenu}
              className="text-light focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 " />
              ) : (
                <FaBars className="w-6 h-6 " />
              )}
            </div>
          </div>
        </div>
        {/* menu for mobile devices */}
        <div className="lg:hidden relative mx-auto w-full block text-center">
          {isMenuOpen && (
            <div
              className={` bg-primary w-full ${
                isMenuOpen ? "border-b" : ""
              } absolute p-4 z-10`}
            >
              {isMenuOpen && (
                <ul className="space-y-4 my-4">
                  {mobileNavLinks.map((link, index) => (
                    <li key={index} onClick={toggleMenu}>
                      <NavLink href={link.href} title={link.title} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
