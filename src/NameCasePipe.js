import React from 'react';

const NameCasePipe = ({ name }) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  return <span>{formattedName}</span>;
};

export default NameCasePipe;
