import React, { useState, useEffect } from "react";
import TeacherNavbar from "../TeacherNavbar";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  return (
    <div>
      <TeacherNavbar />

      <div className="profile">
        <img
          className="profile_image"
          src="https://static.remove.bg/remove-bg-web/913b22608288cd03cc357799d0d4594e2d1c6b41/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
          alt="nothing"
        />
        <div className="profile_info">
          <h2>Name: Steve Harrington</h2>
          <h3>Instructor_ID: 205</h3>
          <h3>Designation: PHd Blockchain</h3>
          <h3>Email: steve@gmail.com</h3>
          <h3>Phone: +92-305-3451469</h3>
          <h3>Salary: Rs. 200,000</h3>
        </div>
      </div>

      <div className="teacher_description">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default TeacherDashboard;
