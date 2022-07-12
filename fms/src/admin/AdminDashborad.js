import React, { useState, useEffect } from "react";
import TeacherComplaint from "./TeacherComplaint";
import TeacherRequest from "./TeacherRequest";
import AdminNavbar from "../AdminNavbar";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="admin_dashboard_wrapper">
        <div id="teacher_requests">
          <h1>Teacher Requests</h1>

          {/*
        <div>
          <span className="cr_unit">Request_ID</span>
          <span className="cr_unit">Description</span>
          <span className="cr_unit">Date</span>
          <span className="cr_unit">From</span>
          <span className="cr_unit">Status</span>
          <span className="cr_unit">Action</span>
        </div>
  */}

          <TeacherRequest />
          <TeacherRequest />
          <TeacherRequest />
        </div>

        <div id="teacher_complaints">
          <h1>Teacher Complaints</h1>

          {/*<div>
          <span className="cr_unit">Complain_ID</span>
          <span className="cr_unit">Description</span>
          <span className="cr_unit">Date</span>
          <span className="cr_unit">From</span>
          <span className="cr_unit">Status</span>
          <span className="cr_unit">Action</span>
</div>*/}

          <TeacherComplaint />
          <TeacherComplaint />
          <TeacherComplaint />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
