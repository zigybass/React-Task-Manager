import React from "react";
// import { TaskProvider } from "../../Context";

function ProgressBar(props) {

  return (

    <div className="container">
      <h4>Progress Bar Page</h4>
      <br></br>
      <div className="progress">
        <div className="determinate" style={{"width": "70%"}}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
