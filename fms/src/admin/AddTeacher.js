import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";

const axios = require("axios");

const AddTeacher = () => {
  const handleAddTeacher = () => {
    axios
      .post("http://localhost:4000/admin/ManageTeachers/AddTeacher", {
        name: name,
        email: email,
        id: id,
        password: password,
        phone: phone,
        salary: salary,
        description: description,
      })
      .then((response) => {
        alert("Teacher Saved");
      });
  };

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <AdminNavbar />

      <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
      <button>Edit Image</button>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
          console.log(name);
        }}
        required
        placeholder="Name"
      />
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
          console.log(id);
        }}
        required
        placeholder="ID"
      />
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
      />
      <input
        type="text"
        onChange={(e) => setPhone(e.target.value)}
        required
        placeholder="Phone Number"
      />
      <input
        type="text"
        onChange={(e) => setSalary(e.target.value)}
        required
        placeholder="Salary"
      />
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        required
        placeholder="Description"
      />

      <button onClick={handleAddTeacher}>Save Teacher</button>
    </div>
  );
};

export default AddTeacher;
