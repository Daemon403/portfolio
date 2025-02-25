import React from 'react';

export default function SectionTitle({ icon, title }) {
  const IconComponent = React.cloneElement(icon, {
    className: 'mr-3 text-yellow-400',
  });

  return (
    <div className="flex items-center mb-8">
      {IconComponent}
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}