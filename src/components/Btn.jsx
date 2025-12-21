import React from "react";
import { Link } from "react-router-dom";

const Btn = () => {
  return (
    <div>
      <button className="bg-hero-primary text-white rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:text-secondary relative after:absolute after:top-0 after:left-0 after:w-full after:h-0 after:bg-slate-900 after:hover:h-full px-10 py-3 font-hero-josefin text-[17px] font-semibold cursor-pointer shadow-sm">
        Shop Now
      </button>
    </div>
  );
};

export default Btn;
