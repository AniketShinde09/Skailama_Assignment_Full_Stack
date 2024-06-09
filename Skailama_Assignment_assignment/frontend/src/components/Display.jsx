import React from "react";
import ellipse from "../Assets/Ellipse.png";
import { FiUpload } from "react-icons/fi";
const Display = () => {
  return (
    <div>
      <div className="flex mt-10">
        <div className="w-full">
          <p className="text-[#3C3C3C] font-bold mb-2">Primary Color</p>
          <input
            // placeholder="colorCode"
            className="border border-gray-300 p-2 rounded-md w-[70%] focus:outline-sky-500"
          />
          <p className="text-[#646464] text-[10px]">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
        <div className="w-full">
          <p className="text-[#3C3C3C] font-bold mb-2">Font Color</p>
          <input
            // placeholder="colorCode"
            className="border border-gray-300 p-2 rounded-md  w-[70%] focus:outline-sky-500"
          />
          <p className="text-[#646464] text-[10px]">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="w-full">
          <p className="text-[#3C3C3C] font-bold mb-2">Font Size(in px)</p>
          <input
            // placeholder="colorCode"
            className="border border-gray-300 p-2 rounded-md w-[80%] focus:outline-sky-500"
          />
          <p className="text-[#646464] text-[10px]">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
        <div className="w-full">
          <p className="text-[#3C3C3C] font-bold">
            Chat Height (in % of total screen)
          </p>
          <input
            // placeholder="colorCode"
            className="border border-gray-300 p-2 rounded-md w-[80%] focus:outline-sky-500"
          />
          <p className="text-[#646464] text-[10px]">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-full mt-5">
          <p className="text-[#3C3C3C] font-bold">Show Sources</p>
          <p className="text-[#646464] text-[10px]">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
       
          <div class="flex items-center mr-[10%]">
            <input type="checkbox" id="toggle" class="hidden" />
            <label
              for="toggle"
              class="cursor-pointer relative w-10 h-4 bg-[#7E22CE] rounded-full transition duration-300 ease-in-out"
            >
              <span class="absolute left-0 w-5 h-5 bg-white rounded-full shadow-md transform translate-x-0 transition duration-300 ease-in-out"></span>
            </label>
          </div>

      </div>

      <div className="border border-gray-300 mt-7 mr-6"></div>

      <div>
        <p className="text-[#7E22CE] text-[20px] text-700 font-bold mt-10 mb-6">
          Chat Icon
        </p>
      </div>

      <div className="flex mt-5">
        <div className="w-full">
          <p className="text-[#3C3C3C] font-bold mb-2">Chat Icon Size</p>
          <input
            // placeholder="colorCode"
            className="border border-gray-300 p-2 rounded-md w-[80%] focus:outline-sky-500"
          />
        </div>
        <div className="w-full">
          <p className="text-[#3C3C3C] font-bold">Position on Screen</p>
          <input
            // placeholder="colorCode"
            className="border border-gray-300 p-2 rounded-md w-[80%] focus:outline-sky-500"
          />
        </div>
      </div>

      <div className="flex mt-5">
        <div className="w-full">
          <p className="text-[#3C3C3C] font-bold mb-2">
            Distance from Bottom (in px)
          </p>
          <input
            // placeholder="colorCode"
            className="border border-gray-300 p-2 rounded-md w-[80%] focus:outline-sky-500"
          />
        </div>
        <div className="w-full">
          <p className="text-[#3C3C3C] font-bold">
            Horizontal Distance (in px)
          </p>
          <input
            // placeholder="colorCode"
            className="border border-gray-300 p-2 rounded-md w-[80%] focus:outline-sky-500"
          />
        </div>
      </div>

      <div className="mb-3">
        <p className="text-[#3C3C3C] text-[20px] text-700 font-bold mt-[25px]">
          Bot Icon
        </p>
        <div className="flex items-center gap-6 mt-5">
          <div>
            <img src={ellipse} />
          </div>
          <div>
            <button className="bg-[#7E22CE] text-white px-2 py-1 rounded-md flex items-center gap-2">
              Upload Image <FiUpload />
            </button>
            <p className="text-[#646464] text-[10px]">
              Recommended Size: 48x48px
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
