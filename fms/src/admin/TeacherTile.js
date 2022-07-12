import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Tile.css";

const TeacherTile = ({ id, name }) => {
  return (
    <div className="tile">
      <span className="tile_unit">{id}</span>
      <span className="tile_unit name_unit">{name}</span>
      <button className="tile_unit tile_button">
        <Link className="link_button" to="./EditTeacher">
          Edit
        </Link>
      </button>
      <button className="tile_unit tile_button tile_button_dlt">Delete</button>
    </div>
  );
};

export default TeacherTile;
