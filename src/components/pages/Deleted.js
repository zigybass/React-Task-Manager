import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";

class Deleted extends React.Component {

  onDelete = e => {
    e.preventDefault();
    console.log("delete final")
    const taskId = e.target.id
    this.props.finalDel(taskId)
  }


  render() {
    console.log(this.props.deleted)
  return (
    <div className="container">
        <h4 style={{ textAlign: "center" }}>Recently Deleted</h4>
        <Collapsible accordion={false}>
          {this.props.deleted.map((task, i) => {
            const { key, newTask } = task;
            return (
              <CollapsibleItem
                id={key}
                key={key}
                name={this.context.fun}
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

export default Deleted;
