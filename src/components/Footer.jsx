import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import EmailBar from "./EmailBar";
import Footer_Bottom from "./Footer_Bottom";
import { motion, useAnimation } from "motion/react";

const Footer = () => {
  const control = useAnimation();
  useEffect(() => {
    control.start("visible")
  },[control])
  const footerVariant = {
    hidden : {opacity : 0},
    visible : 
    {
      opacity : 1,
      transition : {
        staggerChildren : 0.2
      }
    }
  }

  const footerV1 = {
    hidden : {opacity : 0,y : -20},
    visible : {
      opacity : 1,y : 0,
      transition : {
        type : 'spring',
        stiffness : 100,
        damping : 15
      }
    }
  }
  return (
    <>
      <div className="bg-[#EEEFFB] text-[#8A8FB9] text-[16px] font-lato font-normal pt-22.5 pb-22.5">
        <div className="container">
          <motion.div
          variants={footerVariant}
          whileInView={{opacity : 1}}
          viewport={{once : true, amount : 0.5}}
          initial = 'hidden'
          animate = {control}
           className="grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-10">
            {/* left area */}
            <motion.div
            variants={footerV1}
             className="flex flex-col gap-5">
              <Link to="/">
                <span className="text-[34px] font-bold text-secondary font-josefin capitalize hover:text-primary transition-all duration-300 ease-in-out">
                  hekto
                </span>
              </Link>
              <EmailBar />
              <div>
                <p className="text-sm font-medium text-[#8A8FB9] capitalize mb-2.5">
                  Contact Info
                </p>
                <p className="text-sm font-medium text-[#8A8FB9] capitalize mb-0">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
            </motion.div>
            {/* right area */}
            <div className="grid lg:grid-cols-[4fr_4fr_4fr] md:grid-cols-[6fr_6fr] grid-cols-1 gap-10">
              <motion.div
              variants={footerV1}
              >
                <h5 className="font-josefin text-black font-semibold text-[22px] mb-10">
                  Catagories
                </h5>
                <ul className="flex flex-col space-y-5">
                  <li>
                    <Link to="/laptops">Laptops & Computers</Link>
                  </li>
                  <li>
                    <Link to="/Cameras&Photography">Cameras & Photography</Link>
                  </li>
                  <li>
                    <Link to="/SmartPhones&Tablets">
                      Smart Phones & Tablets
                    </Link>
                  </li>
                  <li>
                    <Link to="/VideoGames&Consoles">
                      Video Games & Consoles
                    </Link>
                  </li>
                  <li>
                    <Link to="/WaterproofHeadphones">
                      Waterproof Headphones
                    </Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div
              variants={footerV1}
              >
                <h5 className="font-josefin text-black font-semibold text-[22px] mb-10">
                  Customer Care
                </h5>
                <ul className="flex flex-col space-y-5">
                  <li>
                    <Link to="/MyAccount">My Account</Link>
                  </li>
                  <li>
                    <Link to="/Discount">Discount</Link>
                  </li>
                  <li>
                    <Link to="/Returns">Returns</Link>
                  </li>
                  <li>
                    <Link to="/OrdersHistory">Orders History</Link>
                  </li>
                  <li>
                    <Link to="/OrderTracking">Order Tracking</Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div
              variants={footerV1}
              >
                <h5 className="font-josefin text-black font-semibold text-[22px] mb-10">
                  Pages
                </h5>
                <ul className="flex flex-col space-y-5">
                  <li>
                    <Link to="/Blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/Cameras&BrowsetheShop">Browse the Shop</Link>
                  </li>
                  <li>
                    <Link to="/category&tablets">Category</Link>
                  </li>
                  <li>
                    <Link to="/pre-puiltpages">Pre-Built Pages</Link>
                  </li>
                  <li>
                    <Link to="/WaterproofHeadphones">
                      Visual Composer Elements
                    </Link>
                  </li>
                  <li>
                    <Link to="/WooCommercePages">WooCommerce Pages</Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer_Bottom />
    </>
  );
};

export default Footer;
