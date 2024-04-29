import React from 'react';

const SalaryPipe = ({ salary }) => {
  
  const formattedSalary = `$${salary.toFixed(2)}`;
  return <span>{formattedSalary}</span>;
};

export default SalaryPipe;
