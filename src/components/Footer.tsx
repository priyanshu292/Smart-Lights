import React from "react";
import Footer_bg from "../assets/Footer.png";
import smart_lights_logo from "../assets/smart_lights_logo.png"

const Footer: React.FC = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage: `url(${Footer_bg})`,
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-10">
        <div className="text-white mt-10 md:mt-20 md:mx-40 text-xl flex items-center space-x-2">
          <img className="h-8 md:h-10" src={smart_lights_logo} alt="Smart lights logo" />
        </div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-20 mt-10 md:mt-20 md:mx-40 text-white">
          <a href="#product" className="hover:underline">Product</a>
          <a href="#services" className="hover:underline">Software Services</a>
          <a href="#follow" className="hover:underline">Follow Us</a>
        </div>
      </div>
      <div className="hidden md:block border-t w-full md:w-1/2 border-gray-400 mx-10 md:ml-40 mb-10 md:mb-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-start space-y-5 md:space-y-0 space-x-0 md:space-x-10 py-5 text-white">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms & Conditions</a>
          <a href="#cookie" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
