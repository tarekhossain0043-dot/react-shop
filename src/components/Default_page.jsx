import React from "react";
import { Link } from "react-router-dom";

const Default_page = ({ title, page }) => {
  return (
    <div className="bg-[#F6F5FF] h-71.5 w-full flex items-center flex-col justify-center">
      <div className="container">
        <h4 className="font-bold text-[36px] text-secondary font-josefin capitalize">
          {title}
        </h4>
        <div className="flex items-center justify-items-start">
          <Link
            to="/"
            className="font-lato relative after:w-1 after:absolute after:bottom-1.5 mr-5 after:-right-3 after:h-1 after:rounded-full after:bg-primary after:content-[''] font-medium text-[16px] text-black capitalize cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/pages"
            className="font-lato relative after:w-1 after:absolute after:bottom-1.5 mr-5 after:-right-3 after:h-1 after:rounded-full after:bg-primary after:content-[''] font-medium text-[16px] text-black capitalize cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"
          >
            Pages
          </Link>
          <Link
            to={`/${page}`}
            className="font-lato font-medium text-[16px] text-primary capitalize cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"
          >
            {page}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Default_page;
