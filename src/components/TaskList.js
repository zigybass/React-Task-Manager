import React from "react";

class TaskList extends React.Component {
  state = {
    tasks: []
  };

  componentDidUpdate = () => {
    console.log(this.props.tasks)
  }

  addToDo = e => {
    console.log("add todo");
  };

  render() {
    return (
      <div className="container listCont">
        <h4 style={{ textAlign: "center" }}>Task List</h4>
        <ul className="collection">
          {this.props.tasks.map(task => {
            return <li className="collection-item text-white taskItem">{task.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TaskList;
