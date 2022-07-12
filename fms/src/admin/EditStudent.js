import React, { Component } from "react";
import AdminNavbar from "../AdminNavbar";

const EditStudent = () => {
  return (
    <div>
      <AdminNavbar />

      <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
      <button>Edit Image</button>
      <input type="text" value="Name" />
      <input type="text" value="Email" />
      <input type="text" value="Phone Number" />
      <button>Save Student</button>
    </div>
  );
};

export default EditStudent;
