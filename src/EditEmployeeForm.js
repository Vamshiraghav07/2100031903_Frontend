import React from 'react';

const EditEmployeeForm = ({ employee, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedEmployee = {
      ...employee,
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      gender: formData.get('gender'),
      age: parseInt(formData.get('age')),
      salary: parseFloat(formData.get('salary')),
      department: formData.get('department'),
    };
    onSubmit(updatedEmployee);
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" defaultValue={employee.firstName} required /><br />
        <label>Last Name:</label>
        <input type="text" name="lastName" defaultValue={employee.lastName} required /><br />
        <label>Gender:</label>
        <input type="text" name="gender" defaultValue={employee.gender} required /><br />
        <label>Age:</label>
        <input type="number" name="age" defaultValue={employee.age} required /><br />
        <label>Salary:</label>
        <input type="number" name="salary" defaultValue={employee.salary} required /><br />
        <label>Department:</label>
        <input type="text" name="department" defaultValue={employee.department} required /><br />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployeeForm;
