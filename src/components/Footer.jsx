import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialLinks from "./FooterLinks/SocialLinks";
import FooterLinks from "./FooterLinks/FooterLinks";
import Link from "next/link";

const productLinks = [
  {
    name: "Upscaler",
    link: "/",
  },
  {
    name: "Background Remover",
    link: "/backgroundRemoveScreen",
  },
  {
    name: "Coloring",
    link: "/colorizeScreen",
  },
  {
    name: "Blur",
    link: "/blurScreen",
  },
];
const companyLinks = [
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "About Us",
    link: "/aboutUs",
  },
];
const legalLinks = [
  {
    name: "Terms of services",
    link: "/",
  },
  {
    name: "Privacy policy",
    link: "/",
  },
];
const Footer = () => {
  return (
    <footer className="text-black mt-8 bg-primary">
      <div className="wrapper py-12 flex flex-col justify-evenly md:flex-row gap-8">
        <div className="flex items-center gap-1">
          <Link href={"/"} className="text-2xl md:text-4xl font-bold">
            <span className="text-black">ImgUpscaler</span>
          </Link>
        </div>
        <FooterLinks title={"Products"} links={productLinks} />
        <FooterLinks title={"Company"} links={companyLinks} />
        <FooterLinks title={"Legal"} links={legalLinks} />
        <SocialLinks />
      </div>
      <p className="text-center p-4 font-semibold">
        © 2021 Copyright, All Right Reserved Made by ImgUpscaler
      </p>
    </footer>
  );
};

export default Footer;
