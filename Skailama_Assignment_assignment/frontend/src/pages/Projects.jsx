import React, { useContext, useEffect, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import youtubeImage from "../Assets/youtube.png";
import spotifyImage from "../Assets/spotify.png";
import rssfield from "../Assets/rssfield.png";
import cloudupload from "../Assets/cloud_upload.png";
import { CreateProjectContext } from "../Contexts/CreateProjectContextProvider";
import UploadModal from "../components/UploadModal";
import Sidebar from "../components/Sidebar";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SampleProject from "./SampleProject";
import { useDispatch, useSelector } from "react-redux";
import { getuploads } from "../redux/uploads/action";
import Loader from "../components/Loader";
import Navbar2 from "../components/Navbar2";

const Projects = () => {
  const { isuploadOpen, setIsUploadOpen } = useContext(CreateProjectContext);
  const { mediaName, setMediaName } = useContext(CreateProjectContext);
  const { alluploads, isUploaded,isLoading } = useSelector(
    (store) => store.uploadReducer
  );
  const dispatch = useDispatch();
  const projectId = localStorage.getItem("projectId");
  const filteredUploads = alluploads?.filter(
    (el) => el.projectId === projectId
  );

  

  const handleOpenYoutube = () => {
    setIsUploadOpen(true);
    setMediaName("Youtube");
  };

  const handleOpenSpotify = () => {
    setIsUploadOpen(true);
    setMediaName("Spotify");
  };

  const handleOpenRss = () => {
    setIsUploadOpen(true);
    setMediaName("RSS");
  };

  useEffect(() => {
    dispatch(getuploads());
  }, []);

  useEffect(() => {
    if (isUploaded) {
      dispatch(getuploads());
    }
  }, [isUploaded]);

  useEffect(()=>{

  },[alluploads.length])

 

  return  isLoading ? <Loader/> : 
  <div className="flex gap-20 relative">
    <div className="w-[20%] fixed left-0">
      <Sidebar />
     </div>



    {/* Upload section */}

    {filteredUploads?.length ? (
      <div className="w-[68%] absolute left-[26%]">
      <SampleProject />
      </div>
    ) : (
      <div className="w-[70%] absolute left-[26%]">
       
        <Navbar2  />

        <p className="text-[#7E22CE] text-[38px] mt-8 text-700 font-bold">
          Upload
        </p>

        <div className="border border-[0.75px]-[#999]  w-40  ml-10 text-gray-700 rounded-[35.323px]  font-roboto text-base font-normal flex items-center justify-center gap-1 p-1 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 0.75032px 1.50064px 3.75159px 0px rgba(0, 0, 0, 0.06), 3.00127px 6.00254px 6.75286px 0px rgba(0, 0, 0, 0.05), 6.75286px 13.50572px 9.00381px 0px rgba(0, 0, 0, 0.03), 12.00508px 24.01017px 10.50445px 0px rgba(0, 0, 0, 0.01), 18.75794px 36.76557px 12.00508px 0px rgba(0, 0, 0, 0.00)]">
          <IoHomeOutline />
          <Link to="/">
            {" "}
            <p>Back to Home</p>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-x-10">
          <div

            onClick={handleOpenYoutube}
            className="cursor-pointer mt-[40px] border  border-gray-300 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
        ] rounded-[10px] inline-block px-5 py-5"
          >
            <div className="flex gap-5">
              <div className="inline-block rounded-full w-12">
                <img src={youtubeImage} alt="youtube" />
              </div>
              <div>
                <p className="font-bold">Upload</p>
                <p className="font-bold">Youtube Video</p>
              </div>
            </div>
          </div>

          <div
            onClick={handleOpenSpotify}
            className="cursor-pointer mt-[40px] border  border-gray-300 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
        ] rounded-[10px] inline-block px-5 py-5"
          >
            <div className="flex gap-5">
              <div className="inline-block rounded-full w-12">
                <img src={spotifyImage} alt="spotify" />
              </div>
              <div>
                <p className="font-bold">Upload</p>
                <p className="font-bold">Spotify Poadcast</p>
              </div>
            </div>
          </div>

          <div
            onClick={handleOpenRss}
            className="cursor-pointer mt-[40px] border  border-gray-300 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
        ] rounded-[10px] inline-block px-5 py-5"
          >
            <div className="flex gap-5">
              <div className="inline-block rounded-full w-12">
                <img src={rssfield} alt="rss" />
              </div>
              <div>
                <p className="font-bold">Upload from</p>
                <p className="font-bold">RSS Feed</p>
              </div>
            </div>
          </div>

          <div
            onClick={handleOpenYoutube}
            className="cursor-pointer mt-[10px] border  border-gray-300 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
        ] rounded-[10px] inline-block px-5 py-5"
          >
            <div className="flex gap-5">
              <div className="inline-block rounded-full w-12">
                <img src={youtubeImage} alt="youtube" />
              </div>
              <div>
                <p className="font-bold">Upload</p>
                <p className="font-bold">Youtube Video</p>
              </div>
            </div>
          </div>

          <div
            onClick={handleOpenSpotify}
            className="cursor-pointer mt-[10px] border  border-gray-300 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
        ] rounded-[10px] inline-block px-5 py-5"
          >
            <div className="flex gap-5">
              <div className="inline-block rounded-full w-12">
                <img src={spotifyImage} alt="spotify" />
              </div>
              <div>
                <p className="font-bold">Upload</p>
                <p className="font-bold">Spotify Poadcast</p>
              </div>
            </div>
          </div>

          <div
            onClick={handleOpenRss}
            className="cursor-pointer mt-[10px] border border-gray-300 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 1.18953px 2.37906px 5.94764px 0px rgba(0, 0, 0, 0.06), 4.75811px 9.51622px 10.70575px 0px rgba(0, 0, 0, 0.05), 10.70575px 21.41151px 14.27434px 0px rgba(0, 0, 0, 0.03), 19.03245px 38.0649px 16.65339px 0px rgba(0, 0, 0, 0.01), 29.7382px 58.28688px 19.03245px 0px rgba(0, 0, 0, 0.00);
        ] rounded-[10px] inline-block px-5 py-5"
          >
            <div className="flex gap-5">
              <div className="inline-block rounded-full w-12">
                <img src={rssfield} alt="rss" />
              </div>
              <div>
                <p className="font-bold">Upload from</p>
                <p className="font-bold">RSS Feed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center m-6">
          <p className="text-[#999] text-2xl">or</p>
        </div>

        <div className="border border-dashed border-[#999999] w-[100%] rounded-[10px] text-center p-5">
          <div className="flex justify-center">
            <img src={cloudupload} alt="cloud_upload" className="w-20" />
          </div>
          <p className="text-[#49454F] text-[20px] text-400">
            Select a file or drag and drop here (Podcast Media or
            Transcription Text)
          </p>
          <p className="text-[#999] text-[12px] text-400">
            MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
          </p>

          <button className="border mt-5 border-[#7E22CE] border-[1.925px] rounded-full text-[#7E22CE] px-3 py-2 font-medium">
            Select File
          </button>
        </div>
      </div>
    )}

    {isuploadOpen && <UploadModal mediaName={mediaName} />}
  </div>
};

export default Projects;
