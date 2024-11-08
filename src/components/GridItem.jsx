import React from "react";

export default function GridItem({
  img,
  companyName,
  location,
  companyDescription,
  companyCategory,
}) {
  return (
    <a
      // href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-gray-800 hover:text-blue-600 bg-slate-100 rounded-xl p-6"
    >
      <div className="icon text-3xl mb-2">{img}</div>
      <p className="text-xl">{companyName}</p>
      <p className="text-xl">{location}</p>
      <p className="text-xl">{companyDescription}</p>
      <p className="text-xl">{companyCategory}</p>
    </a>
  );
}
