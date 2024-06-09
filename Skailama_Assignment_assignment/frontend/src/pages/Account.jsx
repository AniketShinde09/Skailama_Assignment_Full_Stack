import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { CiSaveUp2 } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";
import Navbar2 from "../components/Navbar2";
import { useSelector } from "react-redux";

const Account = () => {
 
  let loginDetails =
    JSON.parse(localStorage.getItem("lama-login-details")) || "";
  // console.log(loginDetails);
  const profileImage = localStorage.getItem("lama-profilePicture") || "";
  // console.log(profileImage);
  const [name, setName] = useState(loginDetails?.username);
  const [image, setImage] = useState(profileImage  || "");
  const [hoverIcon, setHoverIcon] = useState(false);
  const handleSaveName = () => {
    const updatedLoginDetails = { ...loginDetails, username: name };
    localStorage.setItem(
      "lama-login-details",
      JSON.stringify(updatedLoginDetails)
    );
  };

  

  const handleSaveImage = () => {
    localStorage.setItem("lama-profilePicture",image);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        handleSaveImage();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex gap-20 relative">
      <div className="w-[20%] fixed left-0">
        <Sidebar />
      </div>
      <div className="w-[75%] absolute left-[26%] pr-3">
      <div className="w-[92%]">
       <Navbar2 />
       </div>
        <p className="text-[#7E22CE] text-[40px] text-700 font-bold">
          Account Settings
        </p>

        <div className="flex  items-center gap-10 mt-10">
          <div
            onMouseEnter={() => setHoverIcon(true)}
            onMouseLeave={() => setHoverIcon(false)}
            className="flex items-center w-[15%]"
          >
            <div className="rounded-full object-cover">
            <img
              className="rounded-full object-cover"
              src={image || "https://res.cloudinary.com/aniket-shinde/image/upload/v1717934704/lama-podcast-company_rmxwoo.png"}
              alt="User Avatar"
            />
            </div>
            {hoverIcon && (
              <label
                htmlFor="file-input"
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer"
              >
                {/* <FaCamera 
                
                style={{
                  color: "rgb(55, 71, 79)",
                    fontSize: "30px",
                    position: "relative",
                    opacity: "0.6",
                    cursor: "pointer",
                }} */}
                {/* /> */}
              </label>
            )}

            <input
            className="w-[20%] absolute"
              id="file-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <div className="w-[35%]">
            <p className="font-bold text-[#3C3C3C]">User Name</p>
            <div className="flex items-center">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="w-[100%] p-1 border border-[#999999] rounded-[7px]"
              />
              <div
                onClick={handleSaveName}
                className="relative right-10 cursor-pointer"
              >
                <CiSaveUp2 style={{ fontSize: "30px", fontWeight: 700 }} />
              </div>
            </div>
          </div>

          <div className="w-[35%]">
            <p className="font-bold text-[#3C3C3C]">Email</p>
            <input
              value={loginDetails?.email}
              placeholder="Enter Email"
              className="w-[100%] p-1 border border-[#999999] rounded-[7px]"
            />
          </div>
        </div>

             <div className="mt-8">
              <p className="font-bold text-[#7E22CE] text-[42px]">Subscriptions</p>
             </div>

             <div style={{background : "linear-gradient(90deg, #7E22CE 0.95%, #460281 99.9%)",boxShadow:"0px 0px 0px 0px rgba(0, 0, 0, 0.06), 0.71942px 1.43885px 3.59712px 0px rgba(0, 0, 0, 0.06), 2.8777px 5.7554px 6.47482px 0px rgba(0, 0, 0, 0.05), 6.47482px 12.94964px 8.63309px 0px rgba(0, 0, 0, 0.03), 11.51079px 23.02158px 10.07194px 0px rgba(0, 0, 0, 0.01), 17.98561px 35.2518px 11.51079px 0px rgba(0, 0, 0, 0.00)"}} className=" w-[93%] flex justify-between items-center p-6 rounded-md mt-7">
          <p className="text-white text-[23px]">
          You are currently on the Ques AI Basic Plan!
          </p>
          <button className="rounded-md text-[18px] text-[#7E22CE] font-bold bg-white px-3 py-1">
          Upgrade
          </button>
        </div>
        
        <div className="mt-3">
          <button className="text-red-500 font-bold underline  underline-offset-4">Cancel Subscription</button>
        </div>

      </div>


    </div>
  );
};

export default Account;
