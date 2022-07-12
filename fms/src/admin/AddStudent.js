import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";
const axios = require("axios");

const AddStudent = () => {
  const handleAddStudent = () => {
    axios
      .post("http://localhost:4000/admin/ManageStudents/AddStudent", {
        name: name,
        email: email,
        id: id,
        password: password,
        phone: phone,
      })
      .then((response) => {
        alert("Student Saved");
      });
  };

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <AdminNavbar />

      <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
      <button>Edit Image</button>
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
        required
        placeholder="ID"
      />
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
        placeholder="Name"
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
      <button onClick={handleAddStudent}>Save Student</button>
    </div>
  );
};

export default AddStudent;
