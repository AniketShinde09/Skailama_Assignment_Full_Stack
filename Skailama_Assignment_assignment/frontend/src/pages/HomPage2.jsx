import React, { useContext, useEffect, useRef, useState } from "react";
import plusimage from "../Assets/Vector.png";
import { CreateProjectContext } from "../Contexts/CreateProjectContextProvider";
import CreateProjectModal from "../components/CreateProjectModal";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getallProjects } from "../redux/createProjects/action";
import Loader from "../components/Loader";

const HomPage2 = () => {
  const { isModalOpen, setIsModalOpen } = useContext(CreateProjectContext);
  const loginDetails = JSON.parse(localStorage.getItem("lama-login-details")) || "";
  const { allProjects, isProjectLoading } = useSelector(
    (store) => store.projectReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { alluploads, isLoading,isAdded } = useSelector((store) => store.uploadReducer);
  const projectId = localStorage.getItem("projectId");
  const filteredUploads = alluploads?.filter(
    (el) => el.projectId === projectId
  );

  const navigateToUpload = (projectId) => {
    localStorage.setItem("projectId", projectId);
    navigate("/uploads");
  };

  useEffect(() => {
    dispatch(getallProjects());
  }, []);

  useEffect(()=>{
    dispatch(getallProjects())
  },[isAdded])

  return isLoading || isProjectLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="flex justify-between m-3">
        <div>
          <p className="text-[35px] ml-40 text-[#7E22CE] font-bold">Projects</p>
        </div>
        <div className="">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex justify-center mr-20 py-2 bg-[#211935]  text-white text-[20px]    rounded-lg flex gap-2 items-center"
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

      {/*projects map here */}
      <div className="w-[75%]  m-auto grid grid-cols-3 gap-x-20">
        {allProjects?.length &&
          allProjects?.map((project) => {
            const initialOfName = project?.projectName
              ?.split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase();

            return (
              <div
               key={project._id}
                onClick={() => navigateToUpload(project?._id)}
                className="cursor-pointer mt-[50px] border border-gray-300 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
      ] rounded-[10px] inline-block px-2 py-2"
              >
                <div className="flex gap-4 ">
                  <div className="bg-[#7E22CE] inline-block rounded-md">
                    <p className="text-white text-[40px] font-bold py-2 px-4">
                      {initialOfName}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-[#7E22CE]  font-bold">
                      {project?.projectName}
                    </p>
                    <p className="text-[10px]">0 Episodes</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {isModalOpen && <CreateProjectModal />}
    </div>
  );
};

export default HomPage2;
