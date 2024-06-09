import React, { useContext, useEffect, useState ,useRef} from "react";
import { CreateProjectContext } from "../Contexts/CreateProjectContextProvider";
import youtubeImage from "../Assets/youtube.png";
import spotifyImage from "../Assets/spotify.png";
import rssfield from "../Assets/rssfield.png";
import ellipse from "../Assets/Ellipse.png";
import { useDispatch, useSelector } from "react-redux";
import { createUpload, getuploads } from "../redux/uploads/action";

const UploadModal = ({ mediaName }) => {
  const { isuploadOpen, setIsUploadOpen } = useContext(CreateProjectContext);
  const loginDetails = JSON.parse(localStorage.getItem("lama-login-details")) || "";
  const projectId = localStorage.getItem("projectId");
  const [name, setName] = useState("");
  const [email,setEmail] = useState("")
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { isUploaded } = useSelector((store) => store.uploadReducer);
  const localStorageLoaded = useRef(false);
  const handleUpload = () => {
    const uploadFile = {
      projectId,
      name,
      description,
      email 
    };

    dispatch(createUpload(uploadFile));
    setName("");
    setDescription("");
    setIsUploadOpen(false);
  };

  useEffect(() => {
    // Check if localStorage data is available
    const storedLoginDetails = JSON.parse(localStorage.getItem("lama-login-details")) || "";
    // console.log(storedLoginDetails);

    // Update the state only if localStorage data is available
    if (storedLoginDetails) {
      setEmail(storedLoginDetails.email);
      localStorageLoaded.current = true;
    }
  }, []);

  useEffect(() => {
    if (isUploaded) {
      getuploads();
    }
  }, [isUploaded]);

  return (
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
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 text-4xl hover:text-gray-700 cursor-pointer"
            onClick={() => {
              // Handle closing modal
              setIsUploadOpen(false);
            }}
          >
            &times;
          </button>

          <div className="p-6">
            <div className="flex items-center gap-3">
              <img
                className="w-12"
                src={
                  mediaName === "Youtube"
                    ? youtubeImage
                    : mediaName === "Spotify"
                    ? spotifyImage
                    : mediaName === "RSS"
                    ? rssfield
                    : mediaName === "media"
                    ? ellipse
                    : ""
                }
              />
              <h1 className="text-xl font-semibold ">
                Upload from {mediaName}
              </h1>
            </div>

            <div className="mb-4 mt-4">
              <label className="block text-md  text-gray">Name:</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="mt-1 p-2 w-full border border-[#000] rounded-lg focus:outline-none focus:border-[#000]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-md  text-gray">Description:</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="mt-1 p-2 w-full border border-[#000] rounded-lg focus:outline-none focus:border-[#000]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-5 m-5">
            <button
              onClick={handleUpload}
              className="px-7 py-2  bg-[#211935]  text-white rounded-md text-lg  text-extrabold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
