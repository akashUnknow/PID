// src/App.jsx
import React from "react";
import { ProjectProvider } from "./context/ProjectContext";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <ProjectProvider>
      <div className="flex flex-col h-screen">
        <StatusBar />
        <div className="flex flex-1">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </ProjectProvider>
  );
}

export default App;
