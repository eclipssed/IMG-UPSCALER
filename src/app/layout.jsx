import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "Img Upscaler",
  description:
    "Upscale your images with Img Upscaler for free with the help of AI in just one click",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <div className=" flex min-h-screen flex-col justify-between text-black scroll-smooth">
          
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
