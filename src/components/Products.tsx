import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productsImage from "../assets/products.png";
import { MdArrowOutward } from "react-icons/md";

const productDetails = [
  {
    id: 1,
    title: "Centralized Control & Monitoring System",
    description:
      "Designed ingeniously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.",
  },
  {
    id: 2,
    title: "NEMA-Mounted VOLC 1160",
    description:
      "This system provides a compact and efficient solution for street light control, designed for easy mounting and robust performance.",
  },
  {
    id: 3,
    title: "Retrofit Street Light Controller VOLC 2160",
    description:
      "An adaptable controller for upgrading existing street lights with modern features, ensuring seamless integration and enhanced functionality.",
  },
  {
    id: 4,
    title: "Retrofit Street Light Controller VOLC 2180",
    description:
      "This retrofit controller ensures seamless integration with current infrastructure, providing advanced control and monitoring capabilities.",
  },
  {
    id: 5,
    title: "Retrofit Street Light Controller VOLC 4180",
    description:
      "High-end controller offering advanced capabilities for street light management, designed to optimize performance and energy efficiency.",
  },
];

const Products: React.FC = () => {
  const [ProductIndex, setProductIndex] = useState(0);
  const selectedProduct = productDetails[ProductIndex];

  const handleNext = () => {
    setProductIndex((prevIndex) =>
      prevIndex === productDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setProductIndex((prevIndex) =>
      prevIndex === 0 ? productDetails.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-200 flex flex-col items-center justify-center px-10 py-[20vh] overflow-hidden lg:px-20 lg:py-[25vh] md:px-14 md:py-[22vh] sm:px-6 sm:py-[18vh]">
      <div className="text-left w-full max-w-5xl mx-auto">
        <h2 className="relative text-blue-900 font-bold text-2xl inline-block pl-8 py-2 sm:text-xl sm:pl-6 md:text-2xl lg:text-3xl">
          Products
          <span className="absolute inset-0 bg-gradient-to-r from-slate-100 to-transparent py-2 w-1/2"></span>
        </h2>
        <h1 className="text-2xl mt-8 sm:text-2xl md:text-3xl lg:text-4xl">
          <span className="font-bold">Cutting-edge hardware,</span> offerings
        </h1>
        <h1 className="text-2xl mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
          helping cities optimize resources and
        </h1>
        <h1 className="text-2xl mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
          achieve smart development goals
        </h1>
        <div className="mt-20 grid grid-cols-4 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productDetails.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setProductIndex(index)}
              className={`py-1 text-sm whitespace-nowrap contain-content ${
                ProductIndex === index
                  ? "bg-blue-100 text-blue-800 border-2 border-blue-800 bg-transparent bg-gradient-to-r from-blue-300 via-transparent to-blue-300"
                  : "bg-gray-200 text-gray-800 border-2 border-gray-600 bg-transparent"
              }`}
            >
              {product.title}
            </button>
          ))}
        </div>

        <div className="relative bg-gradient-to-t from-blue-100 to-white mt-8 flex items-center overflow-hidden flex-col sm:flex-row">
          <div className="flex flex-col items-center w-full sm:w-auto sm:flex-row">
            <img
              src={productsImage}
              alt="Street Lights"
              className="w-[85%] h-full max-h-[50vh] max-w-[70%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]"
            />
            <div className="ml-8 py-20 flex flex-col justify-between sm:ml-4 sm:py-10 md:ml-6 lg:ml-8 lg:py-20">
              <div>
                <h3 className="font-semibold text-gray-500">
                  Products {selectedProduct.id}/5
                </h3>
                <h2 className="text-3xl font-semibold mt-2 text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                  {selectedProduct.title}
                </h2>
                <p className="mt-4 text-gray-600">
                  {selectedProduct.description}
                </p>
              </div>
              <button className="mt-6 py-2 bg-transparent text-blue-500 inline-flex items-center self-start">
                Know More <MdArrowOutward className="ml-2]" />
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-[46.75%] transform -translate-x-1/2 flex mt-4 sm:mt-0 sm:ml-4">
            <button
              onClick={handlePrev}
              className="p-4 bg-gray-200 hover:bg-gray-300 sm:p-3 md:p-4"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-4 bg-white hover:bg-blue-300 sm:p-3 md:p-4"
            >
              <FaChevronRight className="text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
