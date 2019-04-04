import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import Login from "./Login";
import Users from "./Users";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/">HOME | </NavLink>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/users">LOGIN</NavLink>
        </header>
        <>
          <Route exact path="/" component={Home} />

          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </>
      </>
    );
  }
}

function Home(props) {
  return <h1>HOME</h1>;
}

export default App;
