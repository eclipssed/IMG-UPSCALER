// "use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  // const pathname = usePathname();
  // console.log(pathname);
  return (
    <Link
      href={href}
      className="block text-black py-2 pl-3 pr-4 sm:text-xl rounded md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
