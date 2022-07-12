import React, { useEffect, useState } from "react";
import TeacherTile from "./TeacherTile";
import AdminNavbar from "../AdminNavbar";
import { Link } from "react-router-dom";
import "./ManagePersons.css";

const axios = require("axios");

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/admin/ManageTeachers").then((response) => {
      setTeachers(response.data);
    });
  }, []);

  return (
    <div className="manage-persons-wrapper">
      <AdminNavbar />

      <div className="manage-persons-contents">
        <div className="search_container">
          <input
            className="search_bar"
            type="text"
            placeholder="Search Teachers"
          />
          <button className="add_teacher">
            <Link className="add_teacher_link" to="./AddTeacher">
              Add Teacher
            </Link>
          </button>
        </div>

        <TeacherTile id={1} name={"Hussain Mughal"} />
        <TeacherTile id={1} name={"Hussain Mughal oasdfkl;askdf;lsakf;f"} />
        <TeacherTile id={1} name={"Hussain Mughal"} />
      </div>
    </div>
  );
};

export default ManageTeachers;
