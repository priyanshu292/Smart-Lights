import React from "react";
import smart_lights_logo from "../assets/smart_lights_logo.png";
import Hero_section from "../assets/Hero_section.png";
import { Link as ScrollLink } from "react-scroll";

interface NavLink {
  id: number;
  link: string;
}

const Home: React.FC = () => {
  const links: NavLink[] = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "products",
    },
    {
      id: 3,
      link: "software services",
    },
  ];

  return (
    <>
      <div
        className="relative w-full h-screen"
        style={{
          backgroundImage: `url(${Hero_section})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-20 lg:px-44 py-5 md:py-8 lg:py-5 flex justify-between items-center border-gray-800 border-b-[0.0025px]">
          <img className="h-8 md:h-10" src={smart_lights_logo} alt="Smart lights logo" />
          <ul className="hidden md:flex space-x-4 md:space-x-8 lg:space-x-10 items-center">
            {links.map(({ id, link }) => (
              <ScrollLink
                key={id}
                to={link}
                smooth={true}
                duration={500}
                className="text-white font-medium hover:text-gray-300 hover:scale-105 duration-200 cursor-pointer capitalize text-sm md:text-base"
              >
                {link}
              </ScrollLink>
            ))}
            <li>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 md:py-2 md:px-6 lg:px-8 rounded cursor-pointer">
                Login
              </button>
            </li>
          </ul>
        </div>

        <div className="absolute inset-0 z-10 flex justify-center items-center mb-48 md:mb-64 lg:mb-72">
          <div className="text-center px-4 md:px-0">
            <h1 className="text-white text-2xl md:text-3xl lg:text-3xl">Smart Lighting Solutions</h1>
            <p className="text-blue-300 text-3xl md:text-4xl lg:text-5xl mt-4 md:mt-5 lg:mt-7">
              Bringing A New Perspective To Street Lights
            </p>
            <p className="text-blue-300 text-3xl md:text-4xl lg:text-5xl pt-1">
                And The Cities Of Tomorrow.
            </p>
            <button className="mt-8 md:mt-10 lg:mt-14 bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 md:py-2 md:px-6 lg:px-8 rounded cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
