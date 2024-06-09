import React, { useContext, useEffect, useState } from "react";
import { CreateProjectContext } from "../Contexts/CreateProjectContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { deleteupload, getuploads } from "../redux/uploads/action";

function AlertDelete({ deleteId }) {
  const { isDeleteOpen, setIsDeleteOpen } = useContext(CreateProjectContext);
  const dispatch = useDispatch();

  const { isDeleted } = useSelector((store) => store.uploadReducer);

  const handleDeletePodcast = () => {
    dispatch(deleteupload(deleteId));
    // dispatch(getuploads());
    window.location.reload()
  };

  useEffect(() => {
    if (isDeleted) {
      dispatch(getuploads());
    }
  }, [isDeleted]);

  return (
    <>
      <div
        className={`${
          isDeleteOpen ? "fixed" : "hidden"
        } inset-0 w-full h-full z-50 overflow-auto`}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className={`${
              isDeleteOpen ? "inline-block" : "hidden"
            } align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3
                className="text-lg font-medium text-gray-900"
                id="modal-headline"
              >
                Delete Poadcast
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure? You can't undo this action afterwards.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={() => handleDeletePodcast()}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Delete
              </button>
              <button
                onClick={() => setIsDeleteOpen(false)}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertDelete;
