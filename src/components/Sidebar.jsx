import React, { useState } from "react";

const fieldList = [
  "ICCID",
  "IMSI",
  "pin1",
  "pin2",
  "puk1",
  "puk2",
  "authopk",
  "authconst",
  "kic",
  "kid",
  "kic2",
  "kid2",
  "kic3",
  "kid3",
  "ki",
];

const Sidebar = ({ onSelect }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-64 bg-gray-100 border-r p-4">
      <div>
        <div
          className="cursor-pointer font-bold text-lg mb-2"
          onClick={() => setExpanded(!expanded)}
        >
          ➤ Perso
        </div>
        {expanded && (
          <ul className="ml-4">
            {fieldList.map((field) => (
              <li
                key={field}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => onSelect(field)}
              >
                {field}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
