import { useState } from "react";
import { useProject } from "../../context/ProjectContext";

const PUK2 = () => {
  const [puk, setPuk] = useState("");
  const [isRandom, setIsRandom] = useState(false);
  const { updateField } = useProject();

  const handleSave = () => {
    updateField("PUK2", { puk, isRandom });
  };

  return (
    <div>
      <h3 className="font-bold text-lg mb-2">PUK2 Template</h3>
      <input
        className="border p-2 block mb-2"
        value={puk}
        onChange={(e) => setPuk(e.target.value)}
        placeholder="Enter PUK2"
        disabled={isRandom}
      />
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={isRandom}
          onChange={() => setIsRandom(!isRandom)}
          className="mr-2"
        />
        <span>Random PUK</span>
      </div>
      <button className="bg-blue-500 text-white p-2" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default PUK2;
