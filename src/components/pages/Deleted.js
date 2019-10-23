import React from "react";
import { Collapsible } from "react-materialize";

function Deleted(props) {

    console.log(props.deleted)

  return (
    <div className="container appCont">
      <h4 style={{ textAlign: "center" }}>Recently Deleted</h4>
      <Collapsible accordion={false}>
          
      </Collapsible>
    </div>
  );
}

export default Deleted;
