    import React from 'react';

export default function MaterialIcon({ name, className = '' }) {
  return (
    <span className={`material-icons-sharp text-[20px] ${className}`}>
      {name}
    </span>
  );
                      }