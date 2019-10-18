import React from "react";

class Input extends React.Component {

  state = {
      newTask: "",
      details: ""
  };

  onChange (v) {
  }

  submit (e) {
      e.preventDefault();
      console.log("submit test")
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="input-field col s10">
            <i className="material-icons prefix">mode_edit</i>
            <input
              placeholder=""
              id="newTask"
              type="text"
              className="validate"
              onChange={this.onChange.bind(this, this.state.newTask)}
              value={this.state.newTask}
            />
            <label for="first_name">Add New Task</label>
          </div>
          <div className="input-field col s10">
          <i className="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
          <label for="icon_prefix2">Details</label>
        </div>
        <button className="btn waves-effect lime accent-2 black-text waves-dark" onSubmit={this.submit} type="submit" name="action">Create
    <i className="material-icons right">send</i>
  </button>
        </div>
      </div>
    );
  }
}

export default Input;
