import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize"

class TaskList extends React.Component {

  state = {
    tasks: []
  }

  // updateList = () => {
  //   return (
  //   this.props.tasks.map((task, i) => {
  //     const { key, newTask } = task;
  //     return (
  //       <CollapsibleItem
  //         id={key}
  //         key={key}
  //         header={newTask} 
  //         icon={<i onClick={this.props.delTask.bind(this, key)} className="material-icons" id={key}>delete_outline</i>}
  //       >
  //         {task.details}
  //       </CollapsibleItem>
  //     );
  //   }))
  // }

  componentDidUpdate () {
    if (this.props.tasks !== this.state.tasks) {
      console.log("state: " + this.state.tasks)
      console.log("props: " + this.props.tasks)
    }
  }

  // onDelete = id => {
  //   console.log("hello " + id);
  //   console.log(this.state.tasks)
  //   this.setState({ tasks: [...this.state.tasks.filter( task => task.key !== id)]})
  // };

  render() {

    return (
      <div>
        <h4 style={{ textAlign: "center" }}>Task List</h4>
        <Collapsible accordion={false}>
        {this.props.tasks.map((task, i) => {
      const { key, newTask } = task;
      return (
        <CollapsibleItem
          id={key}
          key={key}
          header={newTask} 
          icon={<i onClick={this.props.delTask.bind(this, key)} className="material-icons" id={key}>delete_outline</i>}
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
