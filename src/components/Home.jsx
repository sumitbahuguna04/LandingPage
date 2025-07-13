import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <div className="max-w-[1320px] mt-10">
      <h1 className="text-3xl">Our Services</h1>
      <div className="max-w-[1300px]  text-center grid grid-cols-1 sm:grid-rows-4 sm:grid-cols-2 sm:grid-flow-col lg:grid-rows-2 lg:grid-cols-4 gap-3  px-5 py-5">
        <div className=" p-3  hover:text-white rounded-[5px] border border-gray-400 hover:bg-purple-700 bg-gray-100 	transition duration-700 ">
          <FontAwesomeIcon icon={faLaptopCode} className="text-2xl animate-spin " />

          <h1 className="pt-5 text-xl font-semibold">Web Design</h1>
          <p>et vitae dicta quisquam non dolores soluta, officia</p>
        </div>
        <div className=" p-3  hover:text-white rounded-[5px] border border-gray-400 hover:bg-purple-700  bg-gray-100	transition duration-700  ">
          {" "}
          <FontAwesomeIcon icon={faChartLine} className="text-2xl animate-spin" />
          <h1 className="pt-5 text-xl font-semibold">Web Design</h1>
          <p>et vitae dicta quisquam non dolores soluta, officia</p>
        </div>
        <div className=" p-3  hover:text-white rounded-[5px] border border-gray-400 hover:bg-purple-700  bg-gray-100	transition duration-700 ">
          {" "}
          <FontAwesomeIcon icon={faGem} className=" text-2xl animate-spin" />
          <h1 className="pt-5 text-xl font-semibold">Web Design</h1>
          <p>et vitae dicta quisquam non dolores soluta, officia</p>
        </div>

        <div className=" p-3  hover:text-white rounded-[5px] border border-gray-400 hover:bg-purple-700 bg-gray-100 	transition duration-700 ">
          {" "}
          <FontAwesomeIcon icon={faDatabase} className="text-2xl animate-spin" />
          <h1 className="pt-5 text-xl font-semibold">Web Design</h1>
          <p>et vitae dicta quisquam non dolores soluta, officia</p>
        </div>
        <div className=" p-3  hover:text-white rounded-[5px] border border-gray-400 hover:bg-purple-700  bg-gray-100	transition duration-700 ">
          <FontAwesomeIcon icon={faLaptopCode} className="text-2xl animate-spin" />
          <h1 className="pt-5 text-xl font-semibold">Web Design</h1>
          <p>et vitae dicta quisquam non dolores soluta, officia</p>
        </div>
        <div className=" p-3  hover:text-white rounded-[5px] border border-gray-400 hover:bg-purple-700  bg-gray-100	transition duration-700 ">
          {" "}
          <FontAwesomeIcon icon={faLaptopCode} className="text-2xl animate-spin" />{" "}
          <h1 className="pt-5 text-xl font-semibold">Web Design</h1>
          <p>et vitae dicta quisquam non dolores soluta, officia</p>
        </div>
        <div className=" p-3  hover:text-white rounded-[5px] border border-gray-400 hover:bg-purple-700  bg-gray-100	transition duration-700 ">
          {" "}
          <FontAwesomeIcon icon={faLaptopCode} className="text-2xl animate-spin " />{" "}
          <h1 className="pt-5 text-xl font-semibold">Web Design</h1>
          <p>et vitae dicta quisquam non dolores soluta, officia</p>
        </div>
        <div className=" p-3  hover:text-white rounded-[5px] border border-gray-400 hover:bg-purple-700 bg-gray-100 	transition duration-700 ">
          <FontAwesomeIcon icon={faLaptopCode} className="text-2xl animate-spin " />{" "}
          <h1 className="pt-5 text-xl font-semibold">Web Design</h1>
          <p>et vitae dicta quisquam non dolores soluta, officia</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
