import React from "react";
import { IoIosSettings } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import arrowImg from "../Assets/arrow.png";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { getallProjects } from "../redux/createProjects/action";

const Navbar = () => {

  
const loginDetails = JSON.parse(localStorage.getItem("lama-login-details")) || "";
const hasShownLoginDetails = localStorage.getItem("hasShownLoginDetails");
const dispatch = useDispatch()
  const handleLogout = () => {
   if(loginDetails.email ){
    localStorage.removeItem("lama-login-details");
    localStorage.removeItem("hasShownLoginDetails")
    window.location.reload()
   }
  }
  return (
    <div className="flex justify-between items-center m-5">
      <div className="flex items-center gap-2">
        <div>
          {/* <img src={arrowImg}/> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
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
        <div id="logo" className="text-[#7E22CE] font-extrabold text-2xl">
          LAMA.
        </div>
      </div>

      <div className="flex items-center gap-3">
      <div style={{ fontSize: "32px", color: "#3C3C3C",cursor:"pointer" }}>
     {loginDetails?.email ? <CiLogout onClick={handleLogout}/> : ""}
      </div>
        <div>
          <IoIosSettings style={{ fontSize: "32px", color: "#3C3C3C",cursor:"pointer" }} />
        </div>
        <div>
          <FaRegBell style={{ fontSize: "25px", color: "#3C3C3C",cursor:"pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
