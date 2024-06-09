import React, { createContext, useState } from "react";

export const CreateProjectContext = createContext();

const CreateProjectContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isuploadOpen, setIsUploadOpen] = useState(false);
  const [mediaName, setMediaName] = useState("");
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [showLoginDetails, setShowLoginDetails] = useState(false);

  return (
    <CreateProjectContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isuploadOpen,
        setIsUploadOpen,
        mediaName,
        setMediaName,
        isDeleteOpen,
        setIsDeleteOpen,
        showLoginDetails,
        setShowLoginDetails,
      }}
    >
      {children}
    </CreateProjectContext.Provider>
  );
};

export default CreateProjectContextProvider;
