"use client";

import React, { useState, useEffect } from "react";
import navbarLogo from "@/public/assets/navbarLogo.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";

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
const NavLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/aboutUs",
    title: "About",
  },
  {
    href: "/",
    title: "Tools",
    toolsArray: [
      {
        title: "IMAGE COLORIZE",
        href: "/colorizeScreen",
      },
      {
        title: "IMAGE UPSCALE",
        href: "/upscaleScreen",
      },
      {
        title: "BACKGROUND REMOVE",
        href: "/backgroundRemoveScreen",
      },
      {
        title: "IMAGE BLUR",
        href: "/blurScreen",
      },
    ],
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/pricing",
    title: "Pricing",
  },
];

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <header className=" w-full bg-transparent  fixed top-0 left-0 right-0 z-30">
      <nav
        className={` py-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0  border-b bg-white  duration-300"
            : "bg-lightGray"
        }`}
      >
        <div className="flex wrapper justify-between items-center text-base gap-8 ">
          <Link href="/">
            <Image
              width={175}
              height={47}
              src={navbarLogo}
              // className=""
              alt="logo.png"
            />
          </Link>
          {/* nav items for large devices */}
          <div className="flex gap-32 justify-between items-center">
            <ul className="md:flex space-x-8 hidden">
              {NavLinks.map((link, index) =>
                link.title === "Tools" ? (
                  <li
                    className="hover:cursor-pointer"
                    onClick={() => setShowTools((prev) => !prev)}
                    key={index}
                  >
                    <div className="flex gap-2 text-base text-black hover:text-primary first:font-medium items-center">
                      {link.title}
                      <span>
                        {showTools ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </span>
                    </div>
                    <Link
                      href={link.href}
                      className="block text-base text-black hover:text-primary first:font-medium"
                    >
                      <ul
                        className={`absolute ${
                          showTools ? "border-2 border-t-primary" : ""
                        } ${
                          isSticky ? "bg-white" : "bg-lightGray"
                        } bg-lightGray mt-6  rounded-lg `}
                      >
                        {showTools &&
                          link.toolsArray.map((tool, index) => (
                            <li
                              key={index}
                              className="border-b border-b-darkGray px-8 py-4"
                            >
                              <Link
                                href={tool.href}
                                className="block text-base text-black hover:text-primary first:font-medium"
                              >
                                {tool.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </Link>
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="block text-base text-black hover:text-primary first:font-medium"
                    >
                      {link.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
            {/* btn for large devices */}
            <div className="hidden xl:block">
              <div className="flex items-center gap-4 relative  justify-center">
                <button className="btn">
                  <Link href={"/signIn"}>Sign In</Link>
                </button>
                <button className="btn">
                  <Link href={"/signUp"}>Sign Up</Link>
                </button>
              </div>
            </div>
          </div>
          {/* menu btn for only mobile devices */}
          <div className="md:hidden ">
            <div
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 " />
              ) : (
                <FaBars className="w-6 h-6 " />
              )}
            </div>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 bg-primary mt-16 py-7 text-white ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {mobileNavLinks.map(({ href, title }) => (
            <Link
              href={href}
              key={title}
              onClick={() => setisMenuOpen(false)}
              className="block text-base hover:text-neutralDGrey first:font-medium hover:bg-white rounded-lg"
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
