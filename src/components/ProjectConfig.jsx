import { useState } from "react";
import { useProject } from "../context/ProjectContext";
import ICCID from "./ICCID"; // Import other templates similarly
import IMSI from "./IMSI";
import PIN1 from "./PIN1";

const ProjectConfig = () => {
  const { projectName, setProjectName, projectData, updateField } =
    useProject();
  const [isConfigured, setIsConfigured] = useState(false);

  const handleEFNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleSaveProjectName = () => {
    if (projectName) {
      setIsConfigured(true); // Enable further configuration after project name is set
    }
  };

  return (
    <div className="w-3/4 p-4">
      {!isConfigured ? (
        <div>
          <h2 className="font-bold text-lg mb-2">
            Enter Project Name (EF_name)
          </h2>
          <input
            type="text"
            value={projectName}
            onChange={handleEFNameChange}
            placeholder="Enter EF Name"
            className="border p-2 mb-2"
          />
          <button
            className="bg-blue-500 text-white p-2"
            onClick={handleSaveProjectName}
          >
            OK
          </button>
        </div>
      ) : (
        <div>
          <h3 className="font-bold text-xl mb-2">Configure Templates</h3>
          <ICCID />
          <IMSI />
          <PIN1 />
          {/* Add other components like PIN2, PUK1, etc. */}
        </div>
      )}
    </div>
  );
};

export default ProjectConfig;
