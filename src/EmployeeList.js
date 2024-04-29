import React, { useState } from 'react';
import AddEmployeeForm from './AddEmployeeForm';
import EditEmployeeForm from './EditEmployeeForm';
import EmployeeDetails from './EmployeeDetails';
import './EmployeeList.css';
import SalaryPipe from './SalaryPipe'; // Import the SalaryPipe component
import NameCasePipe from './NameCasePipe'; // Import the NameCasePipe component

const getPosition = (age) => {
  return age > 40 ? 'Senior' : 'Junior';
};

const calculateSalary = (age, position) => {
  return position === 'Senior' ? age * 10 + 50.000 : age * 5 + 50.000;
};

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleAddEmployee = (newEmployee) => {
    const newPosition = getPosition(newEmployee.age);
    const newSalary = calculateSalary(newEmployee.age, newPosition);
    const updatedEmployee = { ...newEmployee, position: newPosition, salary: newSalary };
    setEmployees([...employees, updatedEmployee]);
    setShowAddForm(false);
  };

  const handleEditEmployee = (updatedEmployee) => {
    const newPosition = getPosition(updatedEmployee.age);
    const newSalary = calculateSalary(updatedEmployee.age, newPosition);
    const updatedEmployeeWithSalary = { ...updatedEmployee, position: newPosition, salary: newSalary };
    const updatedEmployees = employees.map(emp =>
      emp.id === updatedEmployee.id ? updatedEmployeeWithSalary : emp
    );
    setEmployees(updatedEmployees);
    setShowEditForm(false);
  };

  const handleDeleteEmployee = (employeeId) => {
    const updatedEmployees = employees.filter(emp => emp.id !== employeeId);
    setEmployees(updatedEmployees);
  };

  const highlightText = (e) => {
    e.target.style.backgroundColor = 'yellow';
  };

  const removeHighlight = (e) => {
    e.target.style.backgroundColor = '';
  };

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseDetails = () => {
    setSelectedEmployee(null);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td onClick={() => handleViewDetails(employee)}>{employee.id}</td>
              <td onMouseEnter={highlightText} onMouseLeave={removeHighlight}>
                {/* Use NameCasePipe component to format names */}
                <NameCasePipe name={employee.firstName} />
                {' '}
                <NameCasePipe name={employee.lastName} />
              </td>
              <td onMouseEnter={highlightText} onMouseLeave={removeHighlight}>{employee.gender}</td>
              <td onMouseEnter={highlightText} onMouseLeave={removeHighlight}>{employee.age}</td>
              <td onMouseEnter={highlightText} onMouseLeave={removeHighlight}>{employee.department}</td>
              <td onMouseEnter={highlightText} onMouseLeave={removeHighlight}>{employee.position}</td>
              <td onMouseEnter={highlightText} onMouseLeave={removeHighlight}>
                {/* Use SalaryPipe component to format salary */}
                <SalaryPipe salary={employee.salary} />
              </td>
              <td>
                <button className="edit-button" onClick={() => { setShowEditForm(true); setEditEmployee(employee); }}>Edit</button>
                <button className="delete-button" onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-button" onClick={() => setShowAddForm(true)}>Add Employee</button>
      {showAddForm && <AddEmployeeForm onSubmit={handleAddEmployee} />}
      {showEditForm && <EditEmployeeForm employee={editEmployee} onSubmit={handleEditEmployee} />}
      {selectedEmployee && <EmployeeDetails employee={selectedEmployee} onClose={handleCloseDetails} />}
      {!selectedEmployee && <tr><td colSpan="8">No employee selected</td></tr>}
    </div>
  );
};

export default EmployeeList;
