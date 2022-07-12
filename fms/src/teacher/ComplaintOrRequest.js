import React, { useState, useEffect } from "react";
import TeacherNavbar from "../TeacherNavbar";
import "./ComplaintOrRequest.css";

const axios = require("axios");

const ComplaintOrRequest = () => {
  const handleHelp = () => {
    axios
      .post("http://localhost:4000/teacher/ComplaintOrRequest", {
        helpType: helpType,
        subject: subject,
        description: description,
      })
      .then((response) => {
        alert("Done");
      });
  };

  const [helpType, setHelpType] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <TeacherNavbar />

      <div className="help_contents">
        <div className="help_content">
          <label for="complaintorrequest">Type: </label>
          <select
            onChange={(e) => setHelpType(e.target.value)}
            name="complaintorrequst"
            id="complaint_or_request"
          >
            <option value="Complaint">Complaint</option>
            <option value="Request">Request</option>
          </select>
        </div>

        <div className="help_content">
          <input
            className="help_subject"
            helpType="text"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="help_content">
          <span>Description</span>
          <div>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              rows="15"
              cols="60"
            ></textarea>
          </div>
        </div>

        <div>
          <button onClick={handleHelp} className="submit_help">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintOrRequest;
