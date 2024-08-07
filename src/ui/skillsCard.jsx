import React from 'react';

function SkillsCard({ image, name }) {
  return (
    <div className="flex flex-col items-center p-4 rounded">
        <img src={image} alt={name} className="w-36 h-36 mb-2" />
        <h4 className="text-lg font-semibold py-4">{name}</h4>
    </div>
  );
}

export default SkillsCard;
