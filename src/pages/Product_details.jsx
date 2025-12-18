import React, { useState } from "react";

import Default_page from "../components/Default_page";
import { featureProduct, sub_product } from "../assets/assets";
import { Link, useParams } from "react-router-dom";
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Minus,
  Plus,
  Star,
} from "lucide-react";
import ProductTabs from "../components/ProductTabs";
const Product_details = () => {
  const { id } = useParams();
  const [productImg, setProductImg] = useState(null);

  const singleProduct = featureProduct.find((pro) => pro.id === id);
  console.log(singleProduct, typeof singleProduct);
  if (!singleProduct) {
    console.log("product not found");
  }

  const clickToUpdateProductImg = (currentImg) => {
    setProductImg(currentImg);
  };

  // 5 star
  const star = Array(5).map((_, i) => {
    return i;
  });
  star.fill(
    <Star className="w-4 h-4 fill-[#FFC416] stroke-0 stroke-[#FFC416" />
  );

  const title = "Product Details";
  const page = "Product Details";
  return (
    <div>
      <Default_page title={title} page={page} />
      <div className="bg-slate-50 flex flex-col items-center justify-center">
        <div className="container drop-shadow-product_details bg-white">
          {/* {singleProduct.map((s_pro, index) => ( */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
            {/* // product image */}
            <div className="grid grid-cols-[2fr_4fr] gap-4">
              {/* sub product */}
              <div className="flex flex-col gap-2.5">
                {/* single sub product */}
                {/* {sub_product.map((subPro, index) => (
                  
                ))} */}
                {sub_product.map((subPro, index) => {
                  return (
                    <div
                      key={index}
                      style={{ backgroundColor: subPro.productBg }}
                      className={`max-h-38.75 p-5 w-full h-full rounded-sm cursor-pointer transition-all ease-in-out focus:rign-1 ring-primary`}
                    >
                      <img
                        src={subPro.productImg}
                        onClick={() =>
                          clickToUpdateProductImg(subPro.productImg)
                        }
                        alt="sub-product"
                        className="w-full h-full"
                      />
                    </div>
                  );
                })}
              </div>
              {/* product image */}
              <div className="w-full max-h-121.75 bg-[#C4C4C4] rounded-sm p-5">
                <img
                  src={!productImg ? singleProduct.img : productImg}
                  className="w-full h-full"
                  alt="product-img"
                />
              </div>
            </div>
            {/* product bio description */}
            <div className="pt-15 pb-15 text-start">
              <h4 className="mb-1 text-[36px] font-josefin font-semibold text-[#0D134E]">
                Playwood arm chair
              </h4>
              <div className="flex items-center gap-0.5 mb-3.5">
                {star}
                <span className="text-[14px] font-josefin font-normal leading-7 text-[#151875]">
                  (22)
                </span>
              </div>
              <div className="flex items-center gap-4 text-[16px] font-josefin font-normal leading-7 text-[#151875]">
                <span>$32.00</span>
                <del className="text-primary">$35.00</del>
              </div>
              <div className="flex items-center gap-1 text-[16px] font-josefin font-normal leading-7 text-[#151875]">
                <span className="pr-3">Color</span>
                <span className="w-5 h-5 flex items-center justify-center bg-blue-400 cursor-pointer rounded-full p-3 transition-all duration-300 ease-in-out focus:ring-1 ring-purple-500">
                  1
                </span>
                <span className="w-5 h-5 flex items-center justify-center bg-purple-500 cursor-pointer rounded-full p-3 transition-all duration-300 ease-in-out focus:ring-1 ring-purple-500">
                  2
                </span>
                <span className="w-5 h-5 flex items-center justify-center bg-indigo-600 cursor-pointer rounded-full p-3 transition-all duration-300 ease-in-out focus:ring-1 ring-purple-500">
                  3
                </span>
              </div>
              <p className="text-[16px] font-josefin font-normal leading-7 text-[#A9ACC6] mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </p>
              <div className="flex items-center gap-5 mb-4">
                <div className="inline-block gap-3 border border-slate-100">
                  <button className="p-3 border-r border-slate-100 cursor-pointer">
                    <Plus className="w-4 h-4" />
                  </button>
                  <span className="px-4 p-3">0</span>
                  <button className="p-3 border-l border-slate-100 cursor-pointer">
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-5">
                  <Link
                    to="/cart"
                    className="text-[16px] font-josefin font-normal leading-7 text-[#151875] capitalize cursor-pointer"
                  >
                    add to cart
                  </Link>
                  <button>
                    <Heart className="w-4 h-4 cursor-pointer" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[16px] font-josefin font-normal leading-7 text-[#151875]">
                  Categories :
                </span>
                <span className="text-[16px] font-josefin font-normal leading-7 text-[#151875] capitalize">
                  fashion, bata, apple, hp, laptop, shopping
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-josefin font-normal leading-7 text-[#151875]">
                  Tags :
                </span>
                <span className="text-[16px] font-josefin font-normal leading-7 text-[#151875] capitalize">
                  bdShop,cheir,c45r4,monitor-setup
                </span>
              </div>
              {/* share */}
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-josefin font-normal leading-7 text-[#151875]">
                  Share :
                </span>
                <span className="w-5 h-5 bg-[#151875] cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary text-white flex items-center justify-center p-1.5 rounded-full">
                  <Facebook className="w-4 h-4" />
                </span>
                <span className="w-5 h-5 bg-[#151875] cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary text-white flex items-center justify-center p-1.5 rounded-full">
                  <Instagram className="w-4 h-4" />
                </span>
                <span className="w-5 h-5 bg-[#151875] cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary text-white flex items-center justify-center p-1.5 rounded-full">
                  <Linkedin className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
      <ProductTabs />
    </div>
  );
};

export default Product_details;
