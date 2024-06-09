import React from "react";
import { IoIosSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="border border-gray min-h-screen p-2 bg-[#F3E8FF] ">
        <div>
          <div>
            <div className="flex items-center gap-2 w-[10px]">
              <div onClick={()=>navigate("/")}>
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 53 53"
                  fill="none"
                >
                  <path
                    d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z"
                    fill="#7E22CE"
                  />
                  <path
                    opacity="0.4"
                    d="M34.3463 16.9308L16.1163 25.1431C14.0688 26.0678 11.9992 23.8661 13.056 21.8846L19.7491 9.18088C22.5893 3.78675 30.2952 3.78675 33.1354 9.18088L35.4912 13.6723C36.1076 14.8832 35.6013 16.3584 34.3463 16.9308Z"
                    fill="#7E22CE"
                  />
                </svg>
              </div>
              <div id="logo" onClick={()=>navigate("/")} className="text-[#7E22CE] font-bold text-2xl">
                LAMA.
              </div>
            </div>

            <div className="mt-[30px]">
              <p>Poadcast Upload Flow</p>
            </div>

            <div className="mt-[30px]">
              <div
                onClick={() => navigate("/uploads")}
                className="bg-[#E2D8EE] p-2 rounded-full hover:bg-[#7E22CE] hover:text-white"
              >
                <button className="rounded-xl flex items-center gap-2">
                  <p className="bg-[#CAC1D5] w-8 p-1 rounded-full hover:bg-[#2C2C2C]">
                    1
                  </p>
                  Projects
                </button>
              </div>

              <div
                onClick={() => navigate("/widgets")}
                className="bg-[#E2D8EE] p-2 rounded-full mt-1 hover:bg-[#7E22CE] hover:text-white"
              >
                <button className="rounded-xl flex items-center gap-2">
                  <p className="bg-[#CAC1D5] w-8 p-1 rounded-full hover:bg-[#0f172a]">
                    2
                  </p>
                  Widget Configurations
                </button>
              </div>
              <div className="border border-gray-300 mt-2"></div>
            </div>
          </div>

          <div className="border border-gray-300 mb-2"></div>
          <div
            className="absolute bottom-0  mb-3  w-[92%] p-2 rounded-full hover:bg-[#7E22CE] hover:text-white "
            onClick={() => navigate("/accounts/settings")}
          >
            <div className="flex justify-left items-center gap-3 mt-[10] ">
              <div className=" bg-[#CAC1D5]  rounded-full ">
                <IoIosSettings style={{ fontSize: "25px" }} />
              </div>
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
