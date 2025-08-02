import "../globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <main className=" flex min-h-screen flex-col justify-between text-black scroll-smooth">
      {/* <div > */}
      <Navbar />
      {children}
      <Footer />
      {/* </div> */}
    </main>
  );
}
