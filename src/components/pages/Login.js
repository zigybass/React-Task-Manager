import React from "react";

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  };

  onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (

      <div className="container loginCont">
          <h4>Login</h4>
        <div className="input-field col s6">
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
        <div className="input-field col s6">
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
      </div>
    );
  }
}

export default Login;
