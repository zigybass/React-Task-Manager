import React from "react";

class TaskList extends React.Component {

  onDelete = () => {

  }

    render () {
      return (
      <div className="container white-text blue-grey darken-1">
        <h4 style={{ textAlign: "center" }}>Task List</h4>
        <ul className="collapsible popout">
          {this.props.tasks.map(task => {
            return (
            <li key={task.key} className="white-text blue-grey darken-1 taskItem">
              <div className="collapsible-header blue-grey darken-1">
                {task.newTask}
              </div>
              <div className="collapsible-body">
                {task.details}
              </div>
            </li>
            );
          })}
        </ul>
      </div>
    );
   }
}

export default TaskList;
