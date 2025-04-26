// src/components/StatusBar.jsx
import React from "react";
import { useProject } from "../context/ProjectContext";

const StatusBar = () => {
  const { projectData, setProjectData } = useProject();
  const projectName = projectData.projectName || "No Project Selected";
  //new project name
  const handleProjectname = () => {
    const newProjectName = prompt("Enter new project name:");
    if (newProjectName) {
      let existingProjects = JSON.parse(localStorage.getItem("projectData"));
      if (!Array.isArray(existingProjects)) {
        existingProjects = [];
      }
      const isDuplicate = existingProjects.some(
        (project) =>
          project.projectName.toLowerCase() === newProjectName.toLowerCase()
      );

      if (isDuplicate) {
        alert("Project name already exists. Please choose a different name.");
        return;
      }

      const newProject = {
        projectName: newProjectName,
        projectOwner: "Akash", // or dynamic
        EFs: {},
      };

      const updatedProjects = [...existingProjects, newProject];

      localStorage.setItem("projectData", JSON.stringify(updatedProjects));
      setProjectData(updatedProjects);
      alert("Project created successfully!");
    }
  };

  const handelSearchInputChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    console.log("Search Value: ", searchValue);
    const filteredData = Object.keys(projectData.projectName);
    console.log("Filtered Data: ", filteredData);
  };
  return (
    <div className="bg-gray-200 p-3 border-t text-sm flex justify-between items-center">
      <div className="text-sm flex gap-2">
        <p className="font-semibold">Project Name :</p>
        <p className="text-gray-700">{projectName}</p>
      </div>
      <div className="pr-14">
        <button
          onClick={handleProjectname}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Create a new project
        </button>
        <input
          onChange={handelSearchInputChange}
          placeholder="Search"
          type="search"
          className="text-white bg-gradient-to-br from-blue-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        />
      </div>
    </div>
  );
};

export default StatusBar;
