import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "./components/Modal";
import About from "./components/About";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="columns">
            <li className="column is-narrow">
              <Link className="button is-primary" to="/">
                Home
              </Link>
            </li>
            <li className="column is-narrow">
              <Link className="button is-success" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="button is-info" to="/modal">
                Modal
              </Link>
            </li>
            <li>
              <Link className="button" to="/users">
                Users
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/modal">
            <Modal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
