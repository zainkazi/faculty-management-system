import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Tile.css";

const StudentTile = () => {
  return (
    <div className="tile">
      <span className="tile_unit">Student_ID</span>
      <span className="tile_unit name_unit">Name</span>
      <button className="tile_unit tile_button">
        <Link className="link_button" to="./EditStudent">
          Edit
        </Link>
      </button>
      <button className="tile_unit tile_button tile_button_dlt">Delete</button>
    </div>
  );
};

export default StudentTile;
