"use client";

import React, { useState } from "react";
import { X, Menu, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const path = usePathname();

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const selectOptions = [
    {
      name: "Section 1",
      path: "/",
    },
    {
      name: "Section 2",
      path: "/section2",
    },
    {
      name: "Section 3",
      path: "/section3",
    },
  ];

  return (
    <div className="relative">
      {/* Toggle button */}
      {!isOpen && (
        <button
          className="absolute top-5 left-5 z-20 cursor-pointer hover:-rotate-45 transition-all duration-100"
          onClick={() => setIsOpen(true)}
        >
          <Menu color="#545454" strokeWidth="3.5px" />
        </button>
      )}

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="h-screen w-1/4 bg-[#cfc6c6] py- px- rounded-r-3xl fixed top-0 left-0 z-10"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col justify-between h-full">
              {/* Top section */}
              <div>
                <div className="flex justify-between py-3 px-2">
                  <div className="flex gap-3 items-center">
                    <div className="bg-[#545454] rounded-full p-5 text-center"></div>
                    <h1 className="text-2xl font-bold text-[#545454]">
                      Dashboard
                    </h1>
                  </div>
                  <div
                    className="cursor-pointer flex items-center hover:rotate-90 transition-all duration-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <X color="#545454" strokeWidth="3.5px" />
                  </div>
                </div>

                {/* Navigation links */}
                <div className="mt-20 flex flex-col gap-2">
                  {selectOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`text-xl font-bold py-1 px-2 w-3/4 rounded-r-3xl text-[#545454] hover:bg-[#545454] hover:text-[#cfc6c6] transition-all duration-100 cursor-pointer ${
                        path === option.path
                          ? "bg-[#545454] text-[#cfc6c6]"
                          : ""
                      }`}
                    >
                      <Link href={option.path}>{option.name}</Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom section (Settings) */}
              <div className="w-full px-10 py-4 bg-[#545454] rounded-br-3xl flex justify-end">
                <Link href="/settings">
                  <Settings color="#cfc6c6" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
