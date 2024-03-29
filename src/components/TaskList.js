import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";

class TaskList extends React.Component {

  state = {
    tasks: []
  };

  componentDidUpdate() {
    console.log("props: " + this.props.tasks);
  }

  onDelete = e => {
    e.preventDefault();
    const taskId = e.target.id
    this.props.delTask(taskId)
  }

  render() {
    console.log("Render state: " + this.props.tasks)
    return (
      <div className="container">
        <h4 style={{ textAlign: "center" }}>Task List</h4>
        <Collapsible accordion={false}>
          {this.props.tasks.map((task, i) => {
            const { key, newTask } = task;
            return (
              <CollapsibleItem
                id={key}
                key={key}
                header={newTask}
                icon={
                  <i
                    onClick={this.onDelete}
                    className="material-icons btn-floating grey darken-3"
                    id={key}
                  >
                    delete_outline
                  </i>
                }
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
