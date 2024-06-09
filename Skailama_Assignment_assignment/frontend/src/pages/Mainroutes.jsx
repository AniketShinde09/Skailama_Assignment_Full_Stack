import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Widgets from "./Widgets";
import Account from "./Account";
import SampleProject from "./SampleProject";
import EditTranscript from "./EditTranscript";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/projects' element={<Projects/>} /> */}
        <Route path="/uploads" element={<Projects />} />
        <Route path="/widgets" element={<Widgets />} />
        <Route
          path="/edit/transcript/:projectId"
          element={<EditTranscript />}
        />
        <Route path="/accounts/settings" element={<Account />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
