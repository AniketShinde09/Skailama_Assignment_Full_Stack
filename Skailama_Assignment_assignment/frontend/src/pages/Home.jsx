import React, { useContext, useEffect, useRef, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import plusimage from "../Assets/Vector.png";
import { CreateProjectContext } from "../Contexts/CreateProjectContextProvider";
import CreateProjectModal from "../components/CreateProjectModal";
import { getallProjects } from "../redux/createProjects/action";
import { useDispatch, useSelector } from "react-redux";
import HomPage2 from "./HomPage2";
import { Link } from "react-router-dom";
import landingImage from "../Assets/landingpageImage.webp";
import Loader from "../components/Loader";
import LoginDetails from "../components/LoginDetails";

const Home = () => {
  const { isModalOpen, setIsModalOpen, setShowLoginDetails, showLoginDetails } =
    useContext(CreateProjectContext);
  const { allProjects, isLoading } = useSelector(
    (store) => store.projectReducer
  );
  const dispatch = useDispatch();
  const hasShownLoginDetails = localStorage.getItem("hasShownLoginDetails");
  useEffect(() => {
    dispatch(getallProjects());
  }, []);

  // useEffect(()=>{

  // },[allProjects.length])

  // if(isLoading){
  //   return <Loader/>
  //  }

 

  useEffect(() => {
    if (!hasShownLoginDetails) {
      const timer = setTimeout(() => {
        setShowLoginDetails(true);
        localStorage.setItem("hasShownLoginDetails", "true");
      
      }, 3000);
      return () => clearTimeout(timer);
    }
   
  }, []);

  return (
    <div>
      <div className="border border-[0.75px]-[#999]  w-40 ml-44 text-gray-700 rounded-[35.323px]  font-roboto text-base font-normal flex items-center justify-center gap-1 p-1 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 0.75032px 1.50064px 3.75159px 0px rgba(0, 0, 0, 0.06), 3.00127px 6.00254px 6.75286px 0px rgba(0, 0, 0, 0.05), 6.75286px 13.50572px 9.00381px 0px rgba(0, 0, 0, 0.03), 12.00508px 24.01017px 10.50445px 0px rgba(0, 0, 0, 0.01), 18.75794px 36.76557px 12.00508px 0px rgba(0, 0, 0, 0.00)]">
        <IoHomeOutline />
        <Link to="/">
          {" "}
          <p>Back to Home</p>
        </Link>
      </div>

      {allProjects?.length ? (
        <HomPage2 />
      ) : (
        <div>
          <div className="text-center">
            <p className="text-[40px] text-[#7E22CE] font-bold text-[900]">
              Create a New Project
            </p>
          </div>

          <div className="flex justify-center">
            <img src={landingImage} className="w-[30%]" />
          </div>

          <div className="text-center">
            <p className="text-[#838383] text-[18px]">
              Copy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut <br /> labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex justify-center bg-[#211935] mt-8 text-white   text-[20px] py-2  rounded-lg flex gap-3 items-center"
            >
              <img
                className="bg-[#211935] w-[11%]"
                src={plusimage}
                alt="createbutton"
              />
              Create New Project
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && <CreateProjectModal />}
      {showLoginDetails && <LoginDetails />}
    </div>
  );
};

export default Home;
