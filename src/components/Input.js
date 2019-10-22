import React from "react";  

class Input extends React.Component {
  state = {
    newTask: "",
    details: "",
    spinner: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ spinner: true})
    const newTask = {
      title: this.state.newTask,
      details: this.state.details
    };
    this.props.addtodo(newTask);
    this.setState({ newTask: "", details: "" });
  };

  render() {
    let spinClass = this.state.spinner ? "spinnerShow" : "spinner";
    return (
      <div className="container inputCont">
        <div className="row">
          <div className="input-field col s10">
            <i className="material-icons prefix">mode_edit</i>
            <input
              placeholder="Add New Task"
              name="newTask"
              id="newTask"
              type="text"
              className="taskTitle"
              onChange={this.onChange}
              value={this.state.newTask}
            />
            <label></label>
          </div>
          <div className="input-field col s10">
            <i className="material-icons prefix">mode_edit</i>
            <textarea
              id="icon_prefix2"
              value={this.state.details}
              name="details"
              onChange={this.onChange}
              className="materialize-textarea"
            ></textarea>
            <label for="icon_prefix2">Details</label>
          </div>
          <button
            id="createBtn"
            className="btn waves-effect lime accent-2 black-text waves-dark"
            onClick={this.onSubmit}
            type="submit"
            name="action"
          >
            Create
            <i className="material-icons right">send</i>
          </button>
          <div className={spinClass}>
            <div className="spinner-sector spinner-color-grey"></div>
            <div className="spinner-sector spinner-color-green"></div>
            <div className="spinner-sector spinner-color-shade"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default Input;
