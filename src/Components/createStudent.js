import React, { useState } from "react";
import TextInput from "./TextInput";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function CreateStudent() {
  const [formData, setFormData] = useState({
    student_rollno: "",
    student_name: "",
    student_email: "",
    student_city: "",
    student_percentage: "",
  });

  // keep <input> name, useState name<attribute>, model name === same

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const response = await fetch(
        "http://localhost:8000/api/register_student_records/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Registration Failed");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Registration Failed : ", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="outer-form-container">
        <h1>Student Registration</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>Register Student here ...</h1>
            <TextInput
              type="text"
              name="student_rollno"
              placeholder="Roll Number"
              onChange={handleChange}
              required
            />
            <TextInput
              type="text"
              name="student_name"
              placeholder="Student Name"
              onChange={handleChange}
              required
            />
            <TextInput
              type="email"
              name="student_email"
              placeholder="Student Email"
              onChange={handleChange}
              required
            />
            <TextInput
              type="text"
              name="student_city"
              placeholder="Student City"
              onChange={handleChange}
              required
            />
            <TextInput
              type="text"
              name="student_percentage"
              placeholder="Student Percentage"
              onChange={handleChange}
              required
            />
            <button className="Create-Button">Register</button>

            <Link to="/student-table">Go to Student Table</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateStudent;
