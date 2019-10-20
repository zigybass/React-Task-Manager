import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";

class TaskList extends React.Component {

  state = {
    tasks: []
  }

  onDelete = id => {
    console.log("hello " + id);

  };

  render() {
    return (
      <div>
        <h4 style={{ textAlign: "center" }}>Task List</h4>
        <Collapsible accordion={false}>
          {this.props.tasks.map((task, i) => {
            return (
              <CollapsibleItem
                id={task.key}
                key={task.key}
                header={task.newTask} 
                icon={<i onClick={this.onDelete.bind(this, i)} className="material-icons" id={task.key}>delete_outline</i>}
              >
                {task.details}
              </CollapsibleItem>
            );
          })}
        </Collapsible>
      </div>
    );
  }
}

export default TaskList;
