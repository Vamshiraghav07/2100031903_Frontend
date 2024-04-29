import React from 'react';

const AddEmployeeForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEmployee = {
      id: formData.get('id'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      gender: formData.get('gender'),
      age: parseInt(formData.get('age')),
      salary: parseFloat(formData.get('salary')),
      department: formData.get('department'),
    };
    onSubmit(newEmployee);
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" name="id" required /><br />
        <label>First Name:</label>
        <input type="text" name="firstName" required /><br />
        <label>Last Name:</label>
        <input type="text" name="lastName" required /><br />
        <label>Gender:</label>
        <input type="text" name="gender" required /><br />
        <label>Age:</label>
        <input type="number" name="age" required /><br />
        <label>Salary:</label>
        <input type="number" name="salary" required /><br />
        <label>Department:</label>
        <input type="text" name="department" required /><br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
