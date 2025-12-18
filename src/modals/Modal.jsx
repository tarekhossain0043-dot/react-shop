import { X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const handleModalToggle = () => {
    navigate("/");
    setIsOpenModal((prev) => !prev);
  };
  return (
    <div
      className={`${
        isOpenModal ? "hidden" : ""
      } absolute z-99999 top-0 left-0 w-full h-screen overflow-y-scroll lg:hidden bg-slate-400 opacity-80`}
    >
      {children}
      <X
        onClick={handleModalToggle}
        className="w-4 h-4 absolute top-12 right-12 cursor-pointer transition-all duration-300 hover:text-primary hover:scale-150"
      />
    </div>
  );
};

export default Modal;
