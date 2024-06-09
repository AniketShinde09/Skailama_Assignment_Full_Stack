import React, { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import enFlag from '../Assets/enflagImage.png'
import { FiBell } from "react-icons/fi";
import home from '../Assets/home.png'
import { useLocation } from "react-router-dom";

const Navbar2 = () => {
  const [mainroute, setMainroute] = useState("");
  const [baseroute, setBaseroute] = useState("");

  const location = useLocation();

  useEffect(()=>{
    if (location.pathname === "/uploads") {
        setMainroute("Upload");
    }else if(location.pathname.startsWith("/edit/transcript")){
        setMainroute("Transcript")
    }else if(location.pathname === "/widgets"){
        setMainroute("Widget Configuration")
    }else if(location.pathname === "/accounts/settings"){
        setMainroute("Account Settings")
    }
  },[location.pathname])

  return (
    <div className="m-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <img src={home} className="w-[80%]" />
          </div>
          <div className="flex items-center">
            <p className="text-[#999] text-[20px] font-medium">
            {location.pathname === "/accounts/settings/" ? "/" : "/Sample/Project/"} {" "}
            </p>
            <p className="text-[#7E22CE] text-[22px] font-bold">{mainroute}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <TiArrowSortedDown style={{ fontSize: "20px" }} />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-bold text-[20px]">EN</p>
            <div>
              <img src={enFlag} className="w-[50%]" />
            </div>
          </div>
          <div>
            <FiBell style={{ fontSize: "20px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
