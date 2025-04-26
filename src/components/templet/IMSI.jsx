import { useState } from "react";
import { useProject } from "../../context/ProjectContext";

const IMSI = () => {
  const [imsi, setImsi] = useState("");
  const [digits, setDigits] = useState(15);
  const [increment, setIncrement] = useState("");
  const { updateField } = useProject();

  const handleSave = () => {
    updateField("IMSI", { imsi, digits, increment });
  };

  return (
    <div>
      <h3 className="font-bold text-lg mb-2">IMSI Template</h3>
      <input
        className="border p-2 block mb-2"
        value={imsi}
        onChange={(e) => setImsi(e.target.value)}
        placeholder="Enter IMSI"
      />
      <input
        className="border p-2 block mb-2"
        type="number"
        value={digits}
        onChange={(e) => setDigits(Number(e.target.value))}
        placeholder="Digits"
      />
      <input
        className="border p-2 block mb-2"
        value={increment}
        onChange={(e) => setIncrement(e.target.value)}
        placeholder="Increment Value"
      />
      <button className="bg-blue-500 text-white p-2" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default IMSI;
