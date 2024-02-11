import React from "react";
import footerLogo from "@/public/assets/footerLogo.png";
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
import Image from "next/image";

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
    <footer className="text-white bg-primary mt-16">
      <div className="wrapper py-12 flex flex-col justify-evenly md:flex-row gap-8">
        <div className="flex items-center gap-1">
          <Link href={"/"} className="text-2xl md:text-4xl font-bold">
            <Image height={47} width={175} src={footerLogo} alt="logo" />
          </Link>
        </div>
        <FooterLinks title={"Products"} links={productLinks} />
        <FooterLinks title={"Company"} links={companyLinks} />
        <FooterLinks title={"Legal"} links={legalLinks} />
        <SocialLinks />
      </div>
      <p className="text-center p-4">
        © 2021 Copyright, All Right Reserved Made by image-Ai
      </p>
    </footer>
  );
};

export default Footer;
