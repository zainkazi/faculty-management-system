import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const StudentNavbar = () => {
  return (
    <div className="header">
      <h2 className="fms_title">
        <Link className="nav_link2" to="/student">
          Faculty Management System
        </Link>
      </h2>
      <div className="teacher_navbar">
        <span className="nav_link">
          <Link className="nav_link2" to="/student/About">
            About
          </Link>
        </span>
        <span className="nav_link">
          <Link className="nav_link2" to="/">
            Sign out
          </Link>
        </span>
      </div>
    </div>
  );
};

export default StudentNavbar;

/* Student
<BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="Timetable" element={<About />} />
          <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter>
*/
