import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = () => {
    fetch("http://localhost:8000/api/List_student_records/")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching data", error));
  };
  return (
    <div>
      <Navbar />
      <table id="student_table">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Percentage</th>
          </tr>
        </thead>

        <tbody>
          {students.map((students) => (
            <tr key={students.id}>
              <td>{students.student_rollno}</td>
              <td>{students.student_name}</td>
              <td>{students.student_email}</td>
              <td>{students.student_city}</td>
              <td>{students.student_percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
