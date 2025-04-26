import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import StatusBar from "../components/StatusBar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <StatusBar />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
