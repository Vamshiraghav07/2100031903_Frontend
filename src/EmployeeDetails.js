import React from 'react';

const EmployeeDetails = ({ employee, onClose }) => {
  return (
    <div className="employee-details">
      <h2>Employee Details</h2>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
      <p><strong>Gender:</strong> {employee.gender}</p>
      <p><strong>Age:</strong> {employee.age}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Salary:</strong> {employee.salary}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EmployeeDetails;
