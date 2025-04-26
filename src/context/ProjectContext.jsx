// src/context/ProjectContext.jsx
import React, { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const useProject = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [projectName, setProjectName] = useState("");
  const [projectData, setProjectData] = useState(() => {
    // Load from localStorage when app starts
    const storedData = localStorage.getItem("projectData");
    return storedData
      ? JSON.parse(storedData)
      : {
          projectName: "",
          projectOwner: "",
          data: {}, // All EF values will be stored here
        };
  });

  const [persoList, setPersoList] = useState([]);

  return (
    <ProjectContext.Provider
      value={{
        projectData,
        projectName,
        setProjectName,
        persoList,
        setPersoList,
        setProjectData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
