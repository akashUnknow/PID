import React from "react";

const InputField = () => {
  return (
    <div>
      {" "}
      <input
        type="text"
        className="border border-blue-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        // value={value}
        autoFocus
        // onChange={(e) => setValue(e.target.value)}
        // onBlur={handleBlur}
      />
    </div>
  );
};

export default InputField;
