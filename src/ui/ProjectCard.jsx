import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

function ProjectCard({ img, title, discr }) {
  return (
    <div className="max-w-[900px] bg-white rounded-lg shadow-md overflow-hidden m-4">
      <img className="w-full h-120 object-cover" src={img} alt={title} /> 
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <FiMoreVertical size={24} className="cursor-pointer text-gray-500 hover:text-gray-700" />
        </div>
        <p className="mt-4 text-gray-600">{discr}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
