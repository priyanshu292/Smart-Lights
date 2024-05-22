// src/components/Services.tsx
import React from "react";
import servicesIcon from "../assets/services.png";

const Services: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-6 md:px-10 mb-16 md:mb-32 py-10 md:py-[20vh]">
      <div className="hidden lg:block absolute top-[27%] left-1/2 w-0.5 h-[150px] border-l-2 border-gray-300"></div>
      <div className="hidden lg:block absolute top-[37%] left-[21.5%] w-[54%] h-0.5 border-t-2 border-gray-300"></div>
      <div className="hidden lg:block absolute top-[37%] left-[40%] w-0.5 h-[400px] border-l-2 border-gray-300"></div>
      <div className="hidden lg:block absolute top-[63.7%] left-[21.5%] w-[54%] h-0.5 border-t-2 border-gray-300"></div>
      <div className="hidden lg:block absolute top-[63.7%] left-[60%] w-0.5 h-[570px] border-l-2 border-gray-300"></div>
      <div className="hidden lg:block absolute top-[86%] left-[21.5%] w-[38.5%] h-0.5 border-t-2 border-gray-300"></div>
      <div className="hidden lg:block absolute top-[97%] left-[60%] w-[20%] h-0.5 border-t-2 border-gray-300"></div>

      <h2 className="text-2xl md:text-4xl mb-6 text-center">The platform assists city managers</h2>
      <h2 className="text-2xl md:text-4xl mb-6 text-center">on multiple fronts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="flex flex-col p-4 mt-10 rounded-lg">
          <img
            src={servicesIcon}
            alt="Icon"
            className="w-12 h-12 md:w-16 md:h-16 items-start mb-4"
          />
          <span className="text-left text-wrap text-xl md:text-3xl md:w-52">
            Saves on power consumption & related costs
          </span>
        </div>
        <div className="flex flex-col p-4 mt-10 md:ml-52 rounded-lg">
          <img
            src={servicesIcon}
            alt="Icon"
            className="w-12 h-12 md:w-16 md:h-16 items-start mb-4"
          />
          <span className="text-left text-wrap text-xl md:text-3xl md:w-52">
            Lowers downtimes
          </span>
        </div>
        <div className="flex flex-col p-4 mt-20 rounded-lg">
          <img
            src={servicesIcon}
            alt="Icon"
            className="w-12 h-12 md:w-16 md:h-16 items-start mb-4"
          />
          <span className="text-left text-wrap text-xl md:text-3xl md:w-52">
            Detects power thefts.
          </span>
        </div>
        <div className="flex flex-col p-4 mt-20 md:ml-5 rounded-lg">
          <img
            src={servicesIcon}
            alt="Icon"
            className="w-12 h-12 md:w-16 md:h-16 items-start mb-4"
          />
          <span className="text-left text-wrap text-xl md:text-3xl md:w-52">
            Ensures smart monitoring and control of the street light
            infrastructure.
          </span>
        </div>
        <div className="flex flex-col p-4 mt-10 rounded-lg">
          <img
            src={servicesIcon}
            alt="Icon"
            className="w-12 h-12 md:w-16 md:h-16 items-start mb-4"
          />
          <span className="text-left text-wrap text-xl md:text-3xl md:w-96">
            Ensures real-time actionable analytics on power failures, lamp
            malfunctions, voltage failures, etc.
          </span>
        </div>
        <div className="flex flex-col p-4 mt-20 md:mt-40 md:ml-48 rounded-lg">
          <img
            src={servicesIcon}
            alt="Icon"
            className="w-12 h-12 md:w-16 md:h-16 items-start mb-4"
          />
          <span className="text-left text-wrap text-xl md:text-3xl md:w-52">
            Ensures security in the neighborhood
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
