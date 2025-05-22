import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col justify-between h-screen">
      <div className="bg-[#cfc6c6]"></div>
      <div className="bg-[#cfc6c6] h-1/2 py-7 px-5 text-[#545454]">

        <div className="flex flex-col justify-between px-6 py-5">

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold italic">Name</h1>
            <p className="text-lg italic">Title</p>
            <p className="text-lg italic">Email</p>
            <p className="text-lg italic">Contact</p>
          </div>

          <div className="bg-[#545454] rounded-full w-10 h-10"></div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
