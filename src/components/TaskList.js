import React from "react";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

class TaskList extends React.Component {

  onDelete = (id) => {
    console.log("hello " + id)
  }

    render () {
      return (
      <div className="container white-text blue-grey darken-1">
        <h4 style={{ textAlign: "center" }}>Task List</h4>
        <ul className="collapsible expandable">
          {this.props.tasks.map(task => {
            return (
              <Collapsible key={task.key} accordion={false}>
              <CollapsibleItem header={task.newTask}>
                {task.details}
              </CollapsibleItem>
              </Collapsible>
            );
          })}
        </ul>
      </div>
    );
   }
}

export default TaskList;
