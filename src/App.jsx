import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MainArea from "./components/MainArea";

const App = () => {
  const [projectName, setProjectName] = useState("");
  const [selectedField, setSelectedField] = useState("");

  return (
    <div className="flex flex-col h-screen">
      <Topbar projectName={projectName} setProjectName={setProjectName} />
      <div className="flex flex-1">
        <Sidebar onSelect={setSelectedField} />
        <MainArea selectedField={selectedField} />
      </div>
    </div>
  );
};

export default App;
