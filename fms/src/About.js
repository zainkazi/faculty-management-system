import React from "react";
import TeacherNavbar from "./TeacherNavbar";
import "./About.css";

const About = () => {
  return (
    <div>
      <TeacherNavbar />

      <div className="about">
        <h1>About</h1>
        <p>
          The Sukkur Institute of Business Administration is a public sector
          degree awarding Institute approved by Higher Education Commission and
          chartered by the Government of Sindh. In 1994, the Sukkur Institute of
          Business Administration was established for business education,
          initially in the hired building of Public School, Sukkur. The Senate
          is the governing body of the Institute. Governor of Sindh is the
          chancellor. Initially, Sukkur IBA was affiliated to IBA Karachi.
        </p>
      </div>
    </div>
  );
};

export default About;
