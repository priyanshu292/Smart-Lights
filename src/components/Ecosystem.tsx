import React from "react";
import street_light_controller from "../assets/street_light_controler.png";
import gateway_png from "../assets/gateway.png";
import cloud_based_management from "../assets/cloud_based_management.png";
import users from "../assets/users.png";
import evaluation from "../assets/evaluation.png";

const Ecosystem: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-tl from-blue-100 flex flex-col items-center justify-center px-10 py-[20vh]">
      <div className="text-left w-full max-w-5xl mx-auto">
        <h2 className="relative text-blue-900 font-bold text-2xl inline-block pl-8 py-2">
          Ecosystem
          <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-transparent py-2 w-1/2"></span>
        </h2>
        <h1 className="text-4xl mt-8">How does a smart street</h1>
        <h1 className="text-4xl mt-4">light ecosystem work?</h1>
      </div>
      <div className="relative flex flex-wrap justify-center mt-10 w-full max-w-5xl mx-auto">
        {/*Lines*/}
        <div className="hidden md:block absolute top-[12%] left-[28%] w-[16.5%] h-0.5 border-t-2 border-dashed border-gray-400"></div>
        <div className="hidden md:block absolute top-[12%] right-[22.5%] w-[23.5%] h-0.5 border-t-2 border-dashed border-gray-400"></div>
        <div className="hidden md:block absolute top-[41%] left-1/2 w-0.5 h-[50px] border-l-2 border-dashed border-gray-400"></div>
        <div className="hidden md:block absolute top-1/2 left-1/3 w-[33%] h-0.5 border-t-2 border-dashed border-gray-400"></div>
        <div className="hidden md:block absolute top-1/2 left-1/3 w-0.5 h-[50px] border-l-2 border-dashed border-gray-400"></div>
        <div className="hidden md:block absolute top-1/2 right-1/3 w-0.5 h-[50px] border-l-2 border-dashed border-gray-400"></div>


        <div className="flex flex-col items-center w-full md:w-1/3 p-4">
          <div className="flex flex-col md:flex-row">
            <div className="py-2 border-2 border-dashed border-blue-500 mr-0 md:mr-4 mb-4 md:mb-0 rounded-3xl">
              <img
                src={street_light_controller}
                alt="Street Light Controller"
                className="w-20 h-20 mx-2 px-4 py-4 border-2 border-blue-500 rounded-2xl"
              />
            </div>
            <div className="py-2 border-2 border-dashed border-blue-500 ml-0 md:ml-4 rounded-3xl">
              <img
                src={street_light_controller}
                alt="Street Light Controller"
                className="w-20 h-20 mx-2 px-4 py-4 border-2 border-blue-500 rounded-2xl"
              />
            </div>
          </div>
          <h3 className="text-sm font-medium mt-4">Street Light Controller</h3>
          <p className="text-center mt-2 text-gray-600">
            Activates/deactivates in response to motion/light sensing and
            controls the brightness of the street lamp.
          </p>
        </div>

        
        <div className="flex flex-col items-center w-full md:w-1/3 p-4">
          <div className="px-2 py-2 border-2 border-dashed border-gray-400 mr-0 md:mr-4 rounded-3xl">
            <img
              src={gateway_png}
              alt="Gateway"
              className="w-20 h-20 px-4 py-4 border-2 border-gray-200 bg-white rounded-2xl"
            />
          </div>
          <h3 className="text-sm font-medium mt-4">Gateway</h3>
          <p className="text-center mt-2 text-gray-600">
            Employed for interfacing between a Controller and the Lighting
            Management Software.
          </p>
        </div>


        <div className="flex flex-col items-center w-full md:w-1/3 p-4">
          <div className="px-2 py-2 border-2 border-dashed border-gray-400 mr-0 md:mr-4 rounded-3xl">
            <img
              src={cloud_based_management}
              alt="Cloud-based Management System"
              className="w-20 h-20 px-4 py-4 border-2 border-gray-200 bg-white rounded-2xl"
            />
          </div>

          <h3 className="text-sm font-medium mt-4">Cloud-based</h3>
          <h3 className="text-sm font-medium">Management System</h3>
          <p className="text-center mt-2 text-gray-600">
            Collects information from multiple gateways.
          </p>
        </div>


        <div className="flex flex-col items-center w-full md:w-1/3 p-4 mt-16">
          <div className="px-2 py-2 border-2 border-dashed border-gray-400 mr-0 md:mr-4 rounded-3xl">
            <img
              src={users}
              alt="Users"
              className="w-20 h-20 px-4 py-4 border-2 border-gray-200 bg-white rounded-2xl"
            />
          </div>
          <h3 className="text-sm font-medium mt-4">Users</h3>
          <p className="text-center mt-2 text-gray-600">
            Data from the cloud is used to monitor and control street lights by
            the System Managers.
          </p>
        </div>


        <div className="flex flex-col items-center w-full md:w-1/3 p-4 mt-16">
          <div className="px-2 py-2 border-2 border-dashed border-gray-400 mr-0 md:mr-4 rounded-3xl">
            <img
              src={evaluation}
              alt="Evaluation"
              className="w-20 h-20 px-4 py-4 border-2 border-gray-200 bg-white rounded-2xl"
            />
          </div>
          <h3 className="text-sm font-medium mt-4">Evaluation</h3>
          <p className="text-center mt-2 text-gray-600">
            Gathered insights are used to evaluate the performance of the
            lighting systems.
          </p>
        </div>


      </div>
    </div>
  );
};

export default Ecosystem;
