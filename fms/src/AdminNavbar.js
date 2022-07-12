import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="header">
      <h2 className="fms_title">
        <Link className="nav_link2" to="/admin">
          Faculty Management System
        </Link>
      </h2>
      <div className="teacher_navbar">
        <span className="nav_link">
          <Link className="nav_link2" to="/admin/ManageTeachers">
            Manage Teachers
          </Link>
        </span>
        <span className="nav_link">
          <Link className="nav_link2" to="/admin/ManageStudents">
            Manage Students
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

export default AdminNavbar;

/* Admin
<BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="ManageTeachers" element={<ManageTeachers />} />
          <Route path="ManageStudents" element={<ManageStudents />} />
          <Route path="ManageTimetables" element={<ManageTimetables />} />
          <Route path="ManageTeachers/AddTeacher" element={<AddTeacher />} />
          <Route path="ManageTeachers/EditTeacher" element={<EditTeacher />} />
          <Route path="ManageStudents/AddStudent" element={<AddStudent />} />
          <Route path="ManageStudents/EditStudent" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
*/
