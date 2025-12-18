import React, { useRef, useState } from "react";
import { productTabs } from "../assets/assets";
import { motion, useInView } from "motion/react";

const ProductTabs = () => {
  const [activeTabs, setActiveTab] = useState("description");
  const activeTab = productTabs.find((tab) => tab.id === activeTabs);

  return (
    <div className="bg-[#F9F8FE] py-26.75">
      <div className="container">
        {/* top filter tabs */}
        <ul className="mb-15">
          {productTabs.map((tabs, index) => {
            return (
              <button
                onClick={() => setActiveTab(tabs.id)}
                key={index}
                className={`text-[24px] ${
                  activeTabs === tabs.id
                    ? "text-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:content-['']"
                    : "text-[#151875]"
                } mr-20 inline-block  font-semibold font-josefin cursor-pointer transition-all duration-300 ease-in-out hover:text-primary`}
              >
                {tabs.label}
              </button>
            );
          })}
        </ul>
        {/* description data */}
        <div className="flex flex-col gap-9 transition-all duration-500 ease-in-out">
          <div className="flex flex-col gap-3.5 text-left">
            {activeTab.title && (
              <h6 className="text-[22px] font-semibold font-josefin text-[#151875]">
                {activeTab.title}
              </h6>
            )}

            <p className="text-[16px] leading-7.25 font-josefin text-[#A9ACC6] font-semibold">
              {activeTab.content}
            </p>
            <h6 className="text-[22px] font-semibold font-josefin text-[#151875]">
              {activeTab.desc_title}
            </h6>
            <ul className="flex flex-col gap-3 text-[16px] font-josefin font-semibold leading-7">
              {activeTab.desc?.map((des, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="hover:text-[#2F1AC4] text-[#000]">
                    <activeTab.Icon />
                  </span>
                  <p className="mb-0 text-[#A9ACC6] font-normal">{des}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* additional Info */}
        {activeTabs === "additionalInfo" && (
          <div>
            {activeTab.weight && (
              <p className="text-sm text-secondary font-semibold leading-7">
                weight :{activeTab.weight}{" "}
              </p>
            )}
            <span className="text-sm text-secondary">
              dimentions :{activeTab.dimensions}
            </span>
            <form>
              <div className="flex items-center gap-2">
                {activeTab.size?.map((sizes, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <input type="radio" name="label" id={sizes} />
                    <label htmlFor={sizes}>{sizes}</label>
                  </div>
                ))}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
