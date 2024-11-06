// IconButton.js
import React from 'react';

const IconButton = ({ icon, label, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center text-gray-800 hover:text-blue-600 w-40 bg-slate-100 rounded-xl p-6">
      <div className="icon text-3xl mb-2">{icon}</div>
      <p className='text-xl'>{label}</p>
    </a>
  );
};

export default IconButton;
