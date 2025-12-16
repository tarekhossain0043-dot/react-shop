import {
  ChevronDown,
  Heart,
  Mail,
  PhoneCall,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrenc, setLang } from "../features/language/languageSlice";

import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";
import { motion } from "motion/react";

const Header = () => {
  const dispatch = useDispatch();
  const setLanguage = useSelector((state) => state.language.language);
  const setCurr = useSelector((state) => state.language.currency);

  // language
  const lang = [
    { code: "en", label: "English" },
    { code: "bn", label: "bangla" },
    { code: "ar", label: "Arabic" },
  ];
  // currency
  const curr = [
    { code: "usd", label: "Usd" },
    { code: "tl", label: "Tk" },
    { code: "rupi", label: "Rupi" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isCurr, setIsCurr] = useState(false);
  const currentCurrency = curr.find((cur) => cur.code === setCurr);
  const currentLang = lang.find((lang) => lang.code === setLanguage);

  const setCurrency = (currCode) => {
    dispatch(setCurrenc(currCode));
  };
  const selectLang = (langCode) => {
    dispatch(setLang(langCode));
  };

  // login or not
  const [userLogin, setUserLogin] = useState(false);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-head-bg py-3.5 max-[375px]:hidden">
          <div className="container">
            <div className="flex flex-col min-[880px]:flex-row items-center justify-between text-head-txt text-[16px] font-semibold">
              {/* left area */}
              <div className="flex items-center gap-12">
                <a
                  href="mailto:mhhasanul@gmail.com"
                  className="group flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary"
                >
                  <Mail className="w-3 h-3 text-head-txt group-hover:text-primary" />
                  <span className="truncate">mhhasanul@gmail.com</span>
                </a>
                <a
                  href="tel:(12345)67890"
                  className="group flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary"
                >
                  <PhoneCall className="w-3 h-3 text-head-txt group-hover:text-primary" />
                  <span className="truncate">(12345)67890</span>
                </a>
              </div>
              {/* right area */}
              <div className="flex max-[550px]:hidden items-center gap-4 justify-end">
                {/* lang */}
                <div className="relative w-20 cursor-pointer">
                  <span
                    className="w-full text-center flex items-center gap-3"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {" "}
                    {/* // show selected lang */}
                    {currentLang ? currentLang.label : "select language"}
                    <ChevronDown className="w-4 h-4" />
                  </span>
                  {isOpen && (
                    <ul className="absolute top-full left-0 w-full cursor-pointer bg-slate-300 text-slate-700 capitalize">
                      {lang.map((lang) => (
                        <li
                          className="px-2 py-1 bg-slate-200 text-xs hover:bg-slate-300 text-slate-600"
                          onClick={() => selectLang(lang.code)}
                          key={lang.code}
                        >
                          {lang.label}
                        </li>
                      ))}
                      {/* // show lang */}
                    </ul>
                  )}
                </div>
                {/* curr */}
                <div className="relative cursor-pointer w-20">
                  <span
                    className="w-full text-center flex items-center gap-3"
                    onClick={() => setIsCurr((prev) => !prev)}
                  >
                    {" "}
                    {/* // show selected lang */}
                    {currentCurrency ? currentCurrency.label : "Usd"}{" "}
                    <ChevronDown className="w-4 h-4" />
                  </span>
                  {isCurr && (
                    <ul className="absolute top-full text-xs left-0 w-full bg-slate-300 text-slate-700 capitalize">
                      {curr.map((lang) => (
                        <li
                          className="px-2 py-1 bg-slate-200 hover:bg-slate-300 text-slate-600"
                          onClick={() => setCurrency(lang.code)}
                          key={lang.code}
                        >
                          {lang.label}
                        </li>
                      ))}
                      {/* // show lang */}
                    </ul>
                  )}
                </div>
                {/* login  */}
                <div className="flex items-center gap-2">
                  {userLogin ? (
                    <div className="flex items-center relative group cursor-pointer gap-2">
                      <div className="w-7 h-7 rounded-full border-none ring-slate-300 ring-1 hover:ring-blue-400 overflow-hidden flex items-center justify-center cursor-pointer">
                        <span className="text-sm uppercase flex items-center leading-0 p-3 mt-1 justify-center">
                          th
                        </span>
                      </div>
                      <span className="text-sm capitalize tracking-wide">
                        tarek hossain
                      </span>
                      <ul className="absolute top-full right-0 w-25 group-hover:block hidden bg-slate-100 rounded-sm">
                        <li className="hover:bg-slate-300 px-4 py-2 text-slate-400 rounded-sm whitespace-nowrap text-xs hover:text-slate-600 cursor-pointer">
                          user profile
                        </li>
                        <li className="hover:bg-slate-300 px-4 py-2 text-slate-400 rounded-sm whitespace-nowrap text-xs hover:text-slate-600 cursor-pointer">
                          logout
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to="/sign-up" className="cursor-pointer">
                      <span className="capitalize flex items-center gap-2">
                        login <User className="w-4 h-4" />
                      </span>
                    </Link>
                  )}
                </div>
                {/* wishlist */}
                <span className="capitalize flex items-center gap-2 cursor-pointer">
                  wishlist
                  <Heart className="w-4 h-4" />
                </span>
                {/* cart */}
                <Link to="/cart" className="relative block">
                  <ShoppingCartIcon className="w-4 h-4" />
                  <div className="w-4 h-4 flex items-center justify-center leading-0 absolute text-xs -top-3 rounded-full right-0 bg-slate-600">
                    <span className="mt-0.5 text-center flex items-center justify-center">
                      0
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Nav />
    </div>
  );
};

export default Header;
