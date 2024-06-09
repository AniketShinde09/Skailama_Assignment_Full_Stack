import React, { useContext, useEffect, useRef, useState } from "react";
import { CreateProjectContext } from "../Contexts/CreateProjectContextProvider";
import { FaLessThan } from "react-icons/fa6";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getallProjects } from "../redux/createProjects/action";

const LoginDetails = () => {
  const { showLoginDetails, setShowLoginDetails } =
    useContext(CreateProjectContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmitProject = () => {
    const loginDetails = {
      username,
      email,
    };
    localStorage.setItem("lama-login-details", JSON.stringify(loginDetails));
    setEmail("");
    setUsername("");
    setShowLoginDetails(false);
    window.location.reload();
  };

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
                setShowLoginDetails(false);
              }}
            >
              &times;
            </button>

            {/* <form> */}

            <div className="p-6">
              <h1 className="text-xl font-semibold mb-4">Login Details</h1>
              <div className="mb-4">
                <label className="block text-md  text-gray">Username:</label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter Name"
                />
              </div>

              <div>
                <label className="block text-md  text-gray">Email:</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <div className="flex justify-end m-5">
              <button
                onClick={handleSubmitProject}
                className="px-5 py-2  bg-[#7E22CE] text-white rounded-lg  text-extrabold"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginDetails;
