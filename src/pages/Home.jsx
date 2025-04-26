import { useProject } from "../context/ProjectContext";
import { useState } from "react";
import ICCID from "../components/ICCID";
// import other components...

const Home = () => {
  const { projectName, setProjectName } = useProject();
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [showEFName, setShowEFName] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gray-200 p-4">
        <input
          type="text"
          placeholder="Enter Project Name"
          className="p-2 border"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      {/* Main Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4">
          <button
            onClick={() => setShowEFName(true)}
            className="text-left w-full"
          >
            ➤ Perso
          </button>
          {showEFName && <div className="ml-4">EF_name</div>}
        </div>

        {/* Main Form Area */}
        <div className="w-3/4 p-4">
          <select
            className="border p-2 mb-4"
            onChange={(e) => setSelectedTemplate(e.target.value)}
          >
            <option value="">Select Template</option>
            <option value="ICCID">ICCID</option>
            <option value="IMSI">IMSI</option>
            <option value="PIN1">PIN1</option>
            {/* Add other options... */}
          </select>

          {/* Render selected template */}
          {selectedTemplate === "ICCID" && <ICCID />}
          {selectedTemplate === "IMSI" && <IMSI />}
          {selectedTemplate === "PIN1" && <PIN1 />}
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default Home;
