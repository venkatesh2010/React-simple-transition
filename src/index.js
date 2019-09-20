import React from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Modal />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
