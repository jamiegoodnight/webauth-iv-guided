import React from "react";
import axios from "axios";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  render() {
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </>
    );
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };
    axios
      .get("http://localhost:5000/api/users", requestOptions)
      .then(res => {
        this.setState = {
          users: res.data
        };
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default Users;
