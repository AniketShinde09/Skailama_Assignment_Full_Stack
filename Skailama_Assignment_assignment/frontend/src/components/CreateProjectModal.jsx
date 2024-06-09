import React, { useContext, useEffect, useRef, useState } from "react";
import { CreateProjectContext } from "../Contexts/CreateProjectContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { createProjects, getallProjects } from "../redux/createProjects/action";

const CreateProjectModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(CreateProjectContext);
  const [projectName, setProjectName] = useState("");
  const [email, setEmail] = useState("");
  const loginDetails = JSON.parse(localStorage.getItem("lama-login-details")) || "";
  // console.log(loginDetails)

  const localStorageLoaded = useRef(false);
  // console.log(email)

  const dispatch = useDispatch();
  const { isAdded, allProjects } = useSelector((store) => store.projectReducer);
  const handleSubmitProject = () => {
    const projectObj = {
      projectName,
      email 
    };
    // console.log(projectObj)
    dispatch(createProjects(projectObj));
    setProjectName("");
  };

  useEffect(() => {
   
    const storedLoginDetails = JSON.parse(localStorage.getItem("lama-login-details")) || "";
    console.log(storedLoginDetails);

   
    if (storedLoginDetails) {
      setEmail(storedLoginDetails.email);
      localStorageLoaded.current = true;
    }
  }, []);

  useEffect(() => {
    if (isAdded) {
      setIsModalOpen(false);
      dispatch(getallProjects());
    }
  }, [isAdded]);

  useEffect(() => {}, [allProjects.length]);

  return (
    <>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
            {/* Add your modal content here */}

            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 text-xl hover:text-gray-700 cursor-pointer"
              onClick={() => {
                // Handle closing modal
                setIsModalOpen(false);
              }}
            >
              &times;
            </button>

            {/* <form> */}

            <div className="p-6">
              <h1 className="text-xl font-semibold mb-4">Create Project</h1>
              <div className="mb-4">
                <label className="block text-md  text-gray">
                  Enter Project Name:
                </label>
                <input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  type="text"
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Type here"
                />
                {!projectName && (
                  <p className="text-red-500 text-[12px] mt-2">
                    Project Name Can't be empty
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-5 m-5">
              <button
                onClick={() => {
                  // Handle closing modal
                  setIsModalOpen(false);
                }}
                className="px-3 py-1 font-bold text-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitProject}
                className="px-3 py-1  bg-[#7E22CE] text-white rounded-lg  text-extrabold"
              >
                Create
              </button>
            </div>

            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProjectModal;
