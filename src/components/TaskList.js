import React from "react";

class TaskList extends React.Component {

  state = {
    tasks: "taskslist"
  };

  componentDidMount = () => {
      this.setState({ tasks: this.props.tasks})
      console.log("tasklist: " + this.state.tasks)
  }

  addToDo = (e) => {
      console.log("add todo")
  }

  render() {

    return (

      <div className="container listCont">
        <h4 style={{ textAlign: "center" }}>Task List</h4>
        <ul className="collection taskList">
            
        </ul>
      </div>
    );
  }
}

export default TaskList;
