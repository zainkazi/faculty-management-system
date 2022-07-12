import React from "react";
import "../admin/Tile.css";

const TeacherComplaint = () => {
  return (
    <div className="tile">
      <span className="tile_unit">Complaint_ID</span>
      <span className="tile_unit">Description</span>
      <span className="tile_unit">Date</span>
      <span className="tile_unit">From</span>
      <span className="tile_unit">Status</span>
      <button className="tile_unit tile_button">Note</button>
      <button className="tile_unit tile_button tile_button_dlt">Ignore</button>
    </div>
  );
};

export default TeacherComplaint;
