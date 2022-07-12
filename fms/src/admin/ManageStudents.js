import React, { Component } from "react";
import StudentTile from "./StudentTile";
import AdminNavbar from "../AdminNavbar";
import { Link } from "react-router-dom";
import "./ManagePersons.css";

const ManageStudents = () => {
  return (
    <div className="manage-persons-wrapper">
      <AdminNavbar />

      <div className="manage-persons-contents">
        <div className="search_container">
          <input
            className="search_bar"
            type="text"
            placeholder="Search Students"
          />
          <button className="add_teacher">
            <Link className="add_teacher_link" to="./AddStudent">
              Add Student
            </Link>
          </button>
        </div>
        <StudentTile />
        <StudentTile />
        <StudentTile />
        <StudentTile />
      </div>
    </div>
  );
};

export default ManageStudents;
