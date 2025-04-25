import React, { useState, useEffect } from "react";

const DynamicForm = ({ fieldName }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(fieldName));
    if (saved) setFormData(saved);
    else setFormData({});
  }, [fieldName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem(fieldName, JSON.stringify(formData));
    alert(`${fieldName} saved!`);
  };

  const isStandard = ["ICCID", "IMSI"].includes(fieldName);
  const isPIN = ["pin1", "pin2", "puk1", "puk2"].includes(fieldName);
  const isAuth = ["authopk", "authconst"].includes(fieldName);
  const isKeyValue = [
    "kic",
    "kid",
    "kic2",
    "kid2",
    "kic3",
    "kid3",
    "ki",
  ].includes(fieldName);

  return (
    <div className="max-w-xl p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">{fieldName} Template</h2>

      {/* Standard Form: ICCID, IMSI */}
      {isStandard && (
        <>
          <label className="block mb-2">Name:</label>
          <input
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
          <label className="block mb-2">Digits:</label>
          <input
            name="digits"
            type="number"
            value={formData.digits || ""}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
          <label className="block mb-2">Increment Value:</label>
          <input
            name="increment"
            type="number"
            value={formData.increment || ""}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
        </>
      )}

      {/* PIN or Fixed Value + Random */}
      {isPIN && (
        <>
          <label className="block mb-2">Fixed Value:</label>
          <input
            name="fixed"
            value={formData.fixed || ""}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
          <label className="block mb-2">Random Value:</label>
          <input
            name="random"
            value={formData.random || ""}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
        </>
      )}

      {/* Auth fields */}
      {isAuth && (
        <>
          <label className="block mb-2">KI Value:</label>
          <input
            name="ki"
            value={formData.ki || ""}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
          <label className="block mb-2">OP/OPc Key:</label>
          <input
            name="op"
            value={formData.op || ""}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
        </>
      )}

      {/* Key-Value Fields */}
      {isKeyValue && (
        <>
          <label className="block mb-2">Name:</label>
          <input
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
          <label className="block mb-2">Key:</label>
          <input
            name="key"
            value={formData.key || ""}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
          <label className="block mb-2">Value:</label>
          <input
            name="value"
            value={formData.value || ""}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
        </>
      )}

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default DynamicForm;
