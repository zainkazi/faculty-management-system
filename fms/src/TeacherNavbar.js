import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const TeacherNavbar = () => {
  return (
    <div className="header">
      <h2 className="fms_title">
        <Link className="nav_link2" to="/teacher">
          Faculty Management System
        </Link>
      </h2>
      <div className="teacher_navbar">
        <span className="nav_link">
          <Link className="nav_link2" to="/teacher/ComplaintOrRequest">
            Help
          </Link>
        </span>
        <span className="nav_link">
          <Link className="nav_link2" to="/teacher/About">
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

export default TeacherNavbar;

/* Teacher
<BrowserRouter>
        <Routes>
          <Route path="/" element={<TeacherDashboard />} />
          <Route path="Timetable" element={<ComplaintOrRequest />} />
          <Route path="ComplaintOrRequest" element={<ComplaintOrRequest />} />
          <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter>
*/
