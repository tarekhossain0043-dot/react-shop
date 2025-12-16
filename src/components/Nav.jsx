import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import * as lucideIcon from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { motion, scale } from "motion/react";

const Nav = () => {
  const nav_menu = [
    {
      to: "/",
      id: 1,
      type: "active",
      label: "Home",
      icon: "ChevronDown",
      submenu: [
        {
          id: "a1",
          to: "/",
          label: "Home page 1",
        },
        {
          id: "a2",
          to: "/home-2",
          label: "Home page 2",
        },
        {
          id: "a3",
          to: "/home-3",
          label: "Home page 3",
        },
      ],
    },
    {
      to: "/pages",
      id: 2,
      label: "Pages",
    },
    {
      to: "/products",
      id: 3,
      label: "Products",
    },
    {
      to: "/blog ",
      id: 4,
      label: "Blog ",
    },
    {
      to: "/shop",
      id: 5,
      label: "Shop",
    },
    {
      to: "/contact",
      id: 6,
      label: "Contact",
    },
  ];
  
  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 40) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      initial={{scale : 0}}
      animate={sticky ? { y: 0, opacity: 1,scale : 1} : { opacity: 1, y: 5,scale : 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className={`${
        sticky
          ? "fixed top-0 left-0 w-full bg-slate-50 shadow-sm backdrop-blur-md z-9999 py-3"
          : "pb-3 relative bg-slate-50 z-9999"
      } bg-transparent`}
    >
      <div className="container flex-1 px-4 md:px-6 lg:px-7 xl:px-8 flex items-center gap-10 justify-between ">
        {/* nav left */}
        <div className="flex w-full items-center gap-22 max-[300px]:gap-10">
          <Link to="/">
            <span className="text-[34px] font-bold text-secondary font-josefin capitalize hover:text-primary transition-all duration-300 ease-in-out">
              hekto
            </span>
          </Link>
          <nav className="flex flex-1 items-center gap-9 max-[880px]:hidden">
            {nav_menu.map((nav) => {
              const Icon = lucideIcon[nav.icon];
              return (
                <li key={nav.id} className="list-none relative group">
                  <Link
                    key={nav.id}
                    to={nav.to}
                    className={`${
                      nav.type === "active" ? "text-primary" : "text-secondary"
                    } flex items-center gap-2 hover:text-primary`}
                  >
                    {nav.label}
                    {Icon && <Icon className="w-4 h-4" />}
                  </Link>
                  {nav.submenu && nav.submenu.length > 0 && (
                    <ul className="w-40 group-hover:block hidden group-hover:translate-y-0 translate-y-7 absolute z-999999 top-full left-0 transition-all duration-500 ease-in-out bg-slate-100 text-slate-400">
                      {nav.submenu.map((subitem) => (
                        <li
                          key={subitem.id}
                          className="px-4 py-2 text-slate-500 hover:text-secondary hover:bg-slate-200"
                        >
                          <Link to={subitem.to || "#"}>{subitem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </nav>
          {/* toggle menu */}
          <Link to="/menu-sidebar" className="min-[848px]:hidden flex-1 w-full">
            <lucideIcon.Menu className="w-5 h-5" />
          </Link>
        </div>

        {/* nav right */}
        <div>
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <div className="flex items-center gap-8 md:hidden">
            {/* wishlist */}
            <span className="capitalize max-[410px]:hidden flex items-center gap-2 cursor-pointer">
              wishlist
              <lucideIcon.Heart className="w-5 h-5" />
            </span>
            {/* cart */}
            <Link to="/cart" className="relative block">
              <lucideIcon.ShoppingCartIcon className="w-5 h-5" />
              <div className="w-4 h-4 flex items-center justify-center leading-0 absolute text-xs -top-3 rounded-full right-0 bg-slate-600">
                <span className="mt-0.5 text-center flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
