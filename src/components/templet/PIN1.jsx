import { useState } from "react";
import { useProject } from "../../context/ProjectContext";

const PIN1 = () => {
  const [pin, setPin] = useState("");
  const [isRandom, setIsRandom] = useState(false);
  const { updateField } = useProject();

  const handleSave = () => {
    updateField("PIN1", { pin, isRandom });
  };

  return (
    <div>
      <h3 className="font-bold text-lg mb-2">PIN1 Template</h3>
      <input
        className="border p-2 block mb-2"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Enter PIN1"
        disabled={isRandom}
      />
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={isRandom}
          onChange={() => setIsRandom(!isRandom)}
          className="mr-2"
        />
        <span>Random PIN</span>
      </div>
      <button className="bg-blue-500 text-white p-2" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default PIN1;
