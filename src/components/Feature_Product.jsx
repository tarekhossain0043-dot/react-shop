import React, { useState } from "react";
import { featureProduct } from "../assets/assets";
import { Link } from "react-router-dom";
const Feature_Product = () => {
  // const [productImgBg, setProductImgBg] = useState("#F6F7FB");
  const [productImgBg, setProductImgBg] = useState({});
  console.log(productImgBg);
  const handleProductBg = (productBg, productId) => {
    setProductImgBg((prevPro) => ({
      ...prevPro,
      [productId]: productBg,
    }));
  };
  return (
    <div className="bg-slate-100 pt-32.5 pb-20">
      <div className="container">
        <h4 className="text-center mb-12 font-josefin font-bold text-secondary text-[42px] sm:text-lg">
          Featured Products
        </h4>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7.5">
          {featureProduct.map((product) => {
            const currentProductBg = productImgBg[product.id] || "#F6F7FB";
            return (
              <div
                key={product.id}
                className="rounded-sm z-10 group cursor-pointer transition-all duration-300 ease-in-out text-sm relative capitalize text-center shadow-lg"
              >
                <div
                  style={{ backgroundColor: currentProductBg }}
                  className={`relative p-7 h-45 flex items-center justify-center`}
                >
                  <img
                    src={product.img}
                    alt="product-img"
                    className="h-full w-full"
                  />
                  <Link
                    to={`/product_details/${product.id}`}
                    className="bg-[#08D15F] opacity-0 transition-all duration-300 ease-in-out transform translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 truncate absolute bottom-3 shadow-sm rounded-sm leading-none text-white hover:bg-primary hover:text-white cursor-pointer px-3.25 py-2 text-[12px] font-josefin capitalize font-medium"
                  >
                    View Details
                  </Link>
                </div>
                <div className="bg-white relative z-10 group-hover:after:h-full after:transition-all after:duration-500 after:opacity-90 after:-z-1 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:content-[''] after:bg-[#2F1AC4] group-hover:text-white transition-all duration-300 ease-in-out text-center px-10 py-5">
                  <p className="mb-4 font-bold text-lg font-lato group-hover:text-white text-primary">
                    {product.title}
                  </p>
                  {product.color_screem.map((colorSch, index) => {
                    const { color1, color2, color3 } = colorSch;
                    return (
                      <div
                        key={index}
                        className="flex items-center mb-3 justify-center gap-1"
                      >
                        <button
                          onClick={() => handleProductBg(color1, product.id)}
                          style={{ backgroundColor: color1 }}
                          className={`px-2 py-0.5 cursor-pointer rounded-full`}
                        ></button>
                        <button
                          onClick={() => handleProductBg(color2, product.id)}
                          style={{ backgroundColor: color2 }}
                          className={`px-2 py-0.5 cursor-pointer rounded-full`}
                        ></button>
                        <button
                          onClick={() => handleProductBg(color3, product.id)}
                          style={{ backgroundColor: color3 }}
                          className={`px-2 py-0.5 cursor-pointer rounded-full`}
                        ></button>
                      </div>
                    );
                  })}
                  <p className="mb-1 text-3.5 font-josefin font-normal group-hover:text-white text-secondary">
                    {product.bio}
                  </p>
                  <span className="text-3.5 font-lato font-normal">
                    $ {product.price.toFixed(2)}
                  </span>
                </div>
                <div className="absolute top-4 transform opacity-0 group-hover:opacity-100 -translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-in-out left-4 z-30 w-full">
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
