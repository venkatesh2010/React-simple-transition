import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModalWorkspce from "./components/ModalWorkspce";
import About from "./components/About";
import Home from "./components/Home";
import RippleWorkspace from "./components/RippleWorkspace";
import { SideBar } from "./components/SideBar";
import { DropdownWorkspace } from "./components/DropdownWorkspace";
export default function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start"
        }}
      >
        <div
          style={{
            height: "100vh",
            width: 200,
            background: "hsl(0, 0%, 96%)"
          }}
        >
          <SideBar />
        </div>
        <div
          style={{
            width: "calc(100vw - 200px)"
          }}
        >
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/modal">
              <ModalWorkspce />
            </Route>
            <Route path="/ripple">
              <RippleWorkspace />
            </Route>
            <Route path="/dropdown">
              <DropdownWorkspace />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}
