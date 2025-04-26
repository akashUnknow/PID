import { useState } from "react";
import { useProject } from "../../context/ProjectContext";

const AuthOPK = () => {
  const [ki, setKi] = useState("");
  const [opk, setOpk] = useState("");
  const { updateField } = useProject();

  const handleSave = () => {
    updateField("AuthOPK", { ki, opk });
  };

  return (
    <div>
      <h3 className="font-bold text-lg mb-2">AuthOPK Template</h3>
      <input
        className="border p-2 block mb-2"
        value={ki}
        onChange={(e) => setKi(e.target.value)}
        placeholder="KI Value"
      />
      <input
        className="border p-2 block mb-2"
        value={opk}
        onChange={(e) => setOpk(e.target.value)}
        placeholder="OPK Key"
      />
      <button className="bg-blue-500 text-white p-2" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default AuthOPK;
