import Link from "next/link";
import React from "react";
import { User } from "lucide-react";

function Navbar() {
  const navOptions = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="w-3/4">
      <div className="px-4 py-3 bg-[#cfc6c6] flex justify-between rounded-b-2xl text-[#545454]">
        <div className="flex justify-center items-center gap-8 text-lg">
          {navOptions.map((option, index) => {
            return (
              <div key={index}>
                <Link
                  className="hover:bg-[#545454] hover:text-[#cfc6c6] px-3 py-2 transition-all duration-200 rounded-md"
                  href={option.path}
                >
                  {option.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="p-2 bg-[#545454] rounded-full cursor-pointer">
          <User color="#cfc6c6" size="30px" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
