import { useState } from "react";
import { useProject } from "../../context/ProjectContext";

const ICCID = () => {
  const [iccid, setIccid] = useState("");
  const [digits, setDigits] = useState(20);
  const [pattern, setPattern] = useState(""); // Correct here, empty string initially
  const [increment, setIncrement] = useState("");
  const [patternError, setPatternError] = useState(""); // New for showing error
  const { updateField } = useProject();

  const handleSave = () => {
    if (pattern.length !== digits) {
      setPatternError(`Pattern must be exactly ${digits} characters long.`);
      return; // Stop if invalid
    }
    updateField("ICCID", { iccid, digits, pattern, increment });
  };

  const handleDigitsChange = (e) => {
    const value = Number(e.target.value);
    setDigits(value);
    setPattern(""); // Reset pattern when digits change
    setPatternError(""); // Clear any old error
  };

  const handlePatternChange = (e) => {
    const value = e.target.value;
    setPattern(value);

    // Live validation (optional)
    if (value.length !== digits) {
      setPatternError(`Pattern must be exactly ${digits} characters long.`);
    } else {
      setPatternError("");
      calculateICCID(value);
    }
  };

  const calculateICCID = (value) => {
    let calculated = "";

    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (/[xXcCfF]/.test(char)) {
        calculated += "0"; // replace x/c/f with 0
      } else {
        calculated += char; // keep original character
      }
    }

    setIccid(calculated);
  };

  const handleSwap = (e) => {
    const value = e.target.value;
    let swapped = iccid.slice(2) + iccid.slice(0, 2);
    if (value === "swap") {
      setIccid(swapped);
    } else if (value === "reverse") {
      setIccid(iccid.split("").reverse().join(""));
    } else {
      setIccid(iccid);
    }
  };

  return (
    <div className="space-y-2">
      <h3 className="font-bold text-base mb-1">ICCID Template</h3>

      {/* ICCID */}
      <input
        className="border p-1 text-sm w-full max-w-xs block"
        value={"ICCID"}
        readOnly
        placeholder="Enter ICCID"
      />

      {/* Digits */}
      <label className="text-sm mb-1">Digits</label>
      <input
        className="border p-1 text-sm w-full max-w-xs block"
        type="number"
        value={digits}
        onChange={handleDigitsChange}
        placeholder="Digits"
      />

      {/* Pattern */}
      <label className="text-sm mb-1">Pattern</label>
      <input
        className={`border p-1 text-sm w-full max-w-xs block ${
          patternError ? "border-red-500" : ""
        }`}
        type="text"
        value={pattern}
        onChange={handlePatternChange}
        placeholder="Enter Pattern"
      />
      {patternError && (
        <p className="text-red-500 text-xs mt-1">{patternError}</p>
      )}

      {/* Increment */}
      <label className="text-sm mb-1 block">Increment</label>
      <input
        className="border p-1 text-sm w-full max-w-xs block"
        type="number"
        min="0"
        max="9999999999"
        value={increment}
        onChange={(e) => setIncrement(Number(e.target.value))}
        placeholder="Increment Value"
      />

      {/* Swap */}
      <label className="text-sm mb-1 block">Swap</label>
      <select
        onChange={handleSwap}
        className="border p-1 text-sm w-full max-w-xs block"
      >
        <option value="none">None</option>
        <option value="swap">Swap</option>
        <option value="reverse">Reverse</option>
      </select>

      {/* Show ICCID */}
      <label className="text-sm mb-1 block">Show ICCID</label>
      <p className="border p-1 text-sm w-full max-w-xs block bg-gray-100">
        {iccid || "No ICCID generated yet"}
      </p>

      {/* Save Button */}
      <button
        className="bg-blue-500 text-white px-2 py-1 text-sm mt-2"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default ICCID;
