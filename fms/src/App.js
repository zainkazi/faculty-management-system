import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TeacherDashboard from "./teacher/TeacherDashboard";
import StudentDashboard from "./student/StudentDashboard";
import AdminDashboard from "./admin/AdminDashborad";
import ManageTeachers from "./admin/ManageTeachers";
import ManageStudents from "./admin/ManageStudents";
import ManageTimetables from "./admin/ManageTimetables";
import EditTeacher from "./admin/EditTeacher";
import EditStudent from "./admin/EditStudent";
import AddStudent from "./admin/AddStudent";
import AddTeacher from "./admin/AddTeacher";
import ComplaintOrRequest from "./teacher/ComplaintOrRequest";
import TeacherNavbar from "./TeacherNavbar";
import About from "./About";
import Login from "./Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="admin/ManageTeachers" element={<ManageTeachers />} />
      <Route path="admin/ManageStudents" element={<ManageStudents />} />
      <Route path="admin/ManageTimetables" element={<ManageTimetables />} />
      <Route path="admin/ManageTeachers/AddTeacher" element={<AddTeacher />} />
      <Route
        path="admin/ManageTeachers/EditTeacher"
        element={<EditTeacher />}
      />
      <Route path="admin/ManageStudents/AddStudent" element={<AddStudent />} />
      <Route
        path="admin/ManageStudents/EditStudent"
        element={<EditStudent />}
      />

      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="teacher/Timetable" element={<ComplaintOrRequest />} />
      <Route
        path="teacher/ComplaintOrRequest"
        element={<ComplaintOrRequest />}
      />
      <Route path="teacher/About" element={<About />} />

      <Route path="/student" element={<StudentDashboard />} />
      <Route path="student/Timetable" element={<About />} />
      <Route path="student/About" element={<About />} />
    </Routes>
  );
};

export default App;
