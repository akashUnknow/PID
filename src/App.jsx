// src/App.jsx
import React from "react";
import { ProjectProvider } from "./context/ProjectContext";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import StatusBar from "./components/StatusBar";
import Home from "./pages/Home";

function App() {
  return (
    <ProjectProvider>
      <Home />
    </ProjectProvider>
  );
}

export default App;
