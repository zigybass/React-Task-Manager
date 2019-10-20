import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container loginCont">
        <h4>Login</h4>
        <div className="row">
          <div className="input-field col s8">
            <input
              name="username"
              placeholder="Username"
              id="first_name"
              type="text"
              className="validate"
              value={this.state.username}
              onChange={this.onChange}
            />
            <label for="first_name"></label>
          </div>
          <div className="input-field col s8">
            <input
              name="password"
              placeholder="Password"
              id="first_name"
              type="text"
              className="validate"
              value={this.state.password}
              onChange={this.onChange}
            />
            <label for="first_name"></label>
          </div>
          <Link to="/tasks" >
          <button
            className="btn waves-effect lime accent-2 black-text waves-dark"
            onClick={this.onSubmit}
            type="submit"
            name="action"
          >
            Login
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
