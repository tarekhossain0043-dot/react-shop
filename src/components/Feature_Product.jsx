import React from "react";
import { featureProduct } from "../assets/assets";
const Feature_Product = () => {
  return (
    <div className="bg-slate-100 pt-32.5 pb-20">
      <div className="container">
        <h4 className="text-center mb-12 font-josefin font-bold text-secondary text-[42px] sm:text-lg">
          Featured Products
        </h4>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7.5">
          {featureProduct.map((product) => {
            return (
              <div
                key={product.id}
                className="rounded-sm text-sm relative capitalize text-center shadow-lg"
              >
                <div className="bg-[#F6F7FB] relative p-7 h-45 flex items-center justify-center">
                  <img
                    src={product.img}
                    alt="product-img"
                    className="h-full w-full"
                  />
                  <button className="bg-[#08D15F] truncate absolute bottom-3 shadow-sm rounded-sm leading-none text-white px-3.25 py-2 text-[12px] font-josefin capitalize font-medium">View Details</button>
                </div>
                <div className="bg-white text-center px-10 py-5">
                  <p className="mb-4 font-bold text-lg font-lato text-primary">
                    {product.title}
                  </p>
                  {product.color_screem.map((colorSch) => {
                    const { color1, color2, color3 } = colorSch;
                    return (
                      <div className="flex items-center mb-3 justify-center gap-1">
                        <button
                          style={{ backgroundColor: color1 }}
                          className={`px-2 py-0.5 rounded-full`}
                        ></button>
                        <button
                          style={{ backgroundColor: color2 }}
                          className={`px-2 py-0.5 rounded-full`}
                        ></button>
                        <button
                          style={{ backgroundColor: color3 }}
                          className={`px-2 py-0.5 rounded-full`}
                        ></button>
                      </div>
                    );
                  })}
                  <p className="mb-1 text-3.5 font-josefin font-normal text-secondary">
                    {product.bio}
                  </p>
                  <span className="text-3.5 font-lato font-normal">
                    $ {product.price.toFixed(2)}
                  </span>
                </div>
                <div className="absolute top-4 left-4 z-30 w-full">
                  <div className="flex items-center gap-1.5">
                  {product.icons.map((Icon, index) => {
                    return (
                        <span
                          key={index}
                          className="w-8 h-8 flex items-center cursor-pointer transition-all duration-300 ease-in-out first-of-type:bg-[#EEEFFB] first-of-type:text-[#2F1AC4] first-of-type:shadow-sm justify-center rounded-full p-2 hover:bg-[#EEEFFB] hover:text-[#2F1AC4] hover:shadow-sm"
                        >
                          <Icon className="w-5 h-5" />
                        </span>
                    );
                  })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature_Product;
