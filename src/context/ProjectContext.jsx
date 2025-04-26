// src/context/ProjectContext.jsx
import React, { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const useProject = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [projectName, setProjectName] = useState("My First Project");
  const [persoList, setPersoList] = useState([]);

  return (
    <ProjectContext.Provider
      value={{ projectName, setProjectName, persoList, setPersoList }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
