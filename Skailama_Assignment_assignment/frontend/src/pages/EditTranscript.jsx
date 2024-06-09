import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { IoHomeOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editAndUpload, getById, getuploads } from "../redux/uploads/action";
import Loader from "../components/Loader";
import { IoIosSearch } from "react-icons/io";
import Navbar2 from "../components/Navbar2";

const EditTranscript = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { particularUpload, isLoading, isEdited } = useSelector(
    (store) => store.uploadReducer
  );
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState("");
  // console.log(particularUpload)

  useEffect(() => {
    dispatch(getById(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    setDescription(particularUpload?.description || "");
  }, [particularUpload]);

  const handleSaveAndExit = () => {
    dispatch(editAndUpload(particularUpload?._id, { description }));
    setEdit(false);
  };

  const handleDiscard = () => {
    setEdit(false);
  };

  useEffect(() => {
    if (isEdited) {
      dispatch(getById(projectId));
      dispatch(getuploads());
    }
  }, [isEdited]);

  // if(isLoading){
  //  return <Loader/>
  // }

  return isLoading ? <Loader/> :    <div className="flex gap-20">
  <div className="w-[20%]">
    <Sidebar />
  </div>
  <div className="w-[70%]">
   <Navbar2/>
    <div className="flex justify-between items-center mt-10">
      <p className="text-[#7E22CE] text-[36px] text-700 font-bold">
        Edit Transcript
      </p>
      {edit && (
        <div className="flex gap-3">
          <button
            onClick={handleDiscard}
            className="text-red-400 font-bold px-10 py-2 rounded-md  border border-red-400"
          >
            Discard
          </button>
          <button
            onClick={handleSaveAndExit}
            className="px-7 py-2  bg-[#211935]  text-white rounded-md text-lg  text-bold"
          >
            Save & exit
          </button>
        </div>
      )}
    </div>

    <div className="border border-[#7E22CE] p-1 rounded-[10px] mt-10">
      <div className="flex items-center justify-between">
        <div
          onClick={() => setEdit(true)}
          className="cursor-pointer w-[14%] border border-[1px]-[#3C3C3C] bg-[#3C3C3C]  text-[12px]  text-white rounded-[35.323px]  font-roboto text-base font-normal flex items-center justify-center gap-1 p-1 shadow-[0px 0px 0px 0px rgba(0, 0, 0, 0.06), 0.75032px 1.50064px 3.75159px 0px rgba(0, 0, 0, 0.06), 3.00127px 6.00254px 6.75286px 0px rgba(0, 0, 0, 0.05), 6.75286px 13.50572px 9.00381px 0px rgba(0, 0, 0, 0.03), 12.00508px 24.01017px 10.50445px 0px rgba(0, 0, 0, 0.01), 18.75794px 36.76557px 12.00508px 0px rgba(0, 0, 0, 0.00)]"
        >
          <FaEdit />
          <p>Edit Mode</p>
        </div>
        <div className="border border-[#7E22CE] rounded-full">
          <IoIosSearch style={{ fontSize: "20px" }} />
        </div>
      </div>
      <div>
        <p className="m-1 font-bold text-[#7E22CE]">Speaker</p>
      </div>
      <div className="w-full overflow-y-auto p-1 h-[60vh]">
        <textarea
        
          className={!edit ? `pointer-events-none w-full focus:border-none focus:outline-none` : `w-full focus:border-none focus:outline-none`}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
    </div>
  </div>
</div>
       
  
};

export default EditTranscript;
