import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./modals/Modal";
import MenuSidebar from "./components/MenuSidebar";
import SearchBar from "./components/SearchBar";
import Product from "./pages/Product";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import { motion, useScroll } from "motion/react";
const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="fixed z-9999999 bottom-5 w-2 h-full bg-slate-300 rounded-full right-5 max-h-40">
        <motion.div
          style={{ scaleY: scrollYProgress, originY: 0 }}
          className={`absolute top-0 left-0 rounded-full w-full h-full bg-primary`}
        ></motion.div>
      </div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Outlet />} />
        <Route
          path="/menu-sidebar"
          element={
            <Modal>
              <MenuSidebar />
            </Modal>
          }
        />
        <Route path="/products" element={<Product />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route
          path="/search-bar"
          element={
            <Modal>
              <SearchBar />
            </Modal>
          }
        /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
