import React, { useState, useEffect } from "react";
import "../admin/Tile.css";

const TeacherRequest = () => {
  return (
    <div className="tile">
      <span className="tile_unit">Request_ID</span>
      <span className="tile_unit">Description</span>
      <span className="tile_unit">Date</span>
      <span className="tile_unit">From</span>
      <span className="tile_unit">Status</span>
      <button className="tile_unit tile_button">Approve</button>
      <button className="tile_unit tile_button tile_button_dlt">Reject</button>
    </div>
  );
};

export default TeacherRequest;
