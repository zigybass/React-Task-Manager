import React from "react";

const TaskList = (props) => {

  console.log(props.tasks)
   
    return (
      <div className="container white-text blue-grey darken-1">
        <h4 style={{ textAlign: "center" }}>Task List</h4>
        <ul className="collection">
          {props.tasks.map(task => {
            return (
            <li key={task.key} className="collection-item white-text blue-grey darken-1 taskItem">{task.newTask}</li>
            );
          })}
        </ul>
      </div>
    );
}

export default TaskList;
