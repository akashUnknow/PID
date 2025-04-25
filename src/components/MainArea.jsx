import React from "react";
import DynamicForm from "./DynamicForm";

const MainArea = ({ selectedField }) => {
  return (
    <div className="p-6 flex-1 overflow-auto">
      {selectedField ? (
        <DynamicForm fieldName={selectedField} />
      ) : (
        <p className="text-gray-500 text-center mt-10">
          Select a field from sidebar
        </p>
      )}
    </div>
  );
};

export default MainArea;
