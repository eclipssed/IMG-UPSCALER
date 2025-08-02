import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "Img Upscaler",
  description:
    "Upscale your images with Img Upscaler for free with the help of AI with just one click",
  // icons: {
  //   // icon: "/favicon.ico", // Path to your favicon.ico
  //   icon: "/favicon.png", // Path to your favicon.ico
  //   shortcut: "/favicon.png", // Optional, for older browsers
  //   apple: "/apple-touch-icon.png", // Path to your Apple touch icon
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ClerkProvider>
          <Toaster position="top-center" reverseOrder={false} />
          {/* <div className=" flex min-h-screen flex-col justify-between text-black scroll-smooth"> */}
          {children}
          {/* </div> */}
        </ClerkProvider>
      </body>
    </html>
  );
}
