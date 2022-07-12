import React, { Component } from "react";
import AdminNavbar from "../AdminNavbar";

const EditTeacher = () => {
  return (
    <div>
      <AdminNavbar />

      <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
      <button>Edit Image</button>
      <input type="text" value="Name" />
      <input type="text" value="Email" />
      <input type="text" value="Phone Number" />
      <input type="text" value="Salary" />
      <input type="text" value="Description" />
      <button>Save Teacher</button>
    </div>
  );
};

export default EditTeacher;
