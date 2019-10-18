import React from "react";

class TaskList extends React.Component {
    
  state = {
    tasks: []
  };

  render() {
    return (
      <div className="container">
        <h4 style={{ textAlign: "center" }}>Tasks List</h4>
        <ul className="collection">
          <li className="collection-item"></li>
          <li className="collection-item"></li>
          <li className="collection-item"></li>
          <li className="collection-item"></li>
        </ul>
      </div>
    );
  }
}

export default TaskList;
