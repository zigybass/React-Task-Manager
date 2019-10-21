import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize"

class TaskList extends React.Component {

  state = {
    tasks: []
  }

  componentDidUpdate () {
    if (this.props.tasks !== this.state.tasks) {
      this.setState({ tasks: this.props.tasks});
    }
  }

  onDelete = id => {
    console.log("hello " + id);
    console.log(this.state.tasks)
    this.setState({ tasks: 
      this.state.tasks.filter( () => {
        return (id !== this.state.tasks.key)
      })  
    })
  };

  render() {

    return (
      <div>
        <h4 style={{ textAlign: "center" }}>Task List</h4>
        <Collapsible accordion={false}>
          {this.props.tasks.map((task, i) => {
            const { key } = task;
            return (
              <CollapsibleItem
                id={key}
                key={task.key}
                header={task.newTask} 
                icon={<i onClick={this.onDelete.bind(this, key)} className="material-icons" id={key}>delete_outline</i>}
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
