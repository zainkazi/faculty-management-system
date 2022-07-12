import React, { useState, useEffect } from "react";
import StudentNavbar from "../StudentNavbar";
import "../teacher/TeacherDashboard.css";

const StudentDashboard = () => {
  return (
    <div>
      <StudentNavbar />

      <div className="profile">
        <img
          className="profile_image"
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          alt="this is picture"
        />
        <div className="profile_info">
          <h2>Name: Jordan Peterson</h2>
          <h3>Student-ID: 123769</h3>
          <h3>Email: jordan@gmail.com</h3>
          <h3>Phone: +92-301-3145691</h3>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
