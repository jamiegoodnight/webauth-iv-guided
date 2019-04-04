import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit;
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              value={this.state.username}
              onChange={this.state.handleChange}
              id="username"
              name="username"
              type="string"
              placeholder="username"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              value={this.state.password}
              onChange={this.state.handleChange}
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div>
            <button type="submit">LOGIN</button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
