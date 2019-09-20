import React from "react";
import Transition from "./Transition";

export default class Modal extends React.Component {
  state = { showModal: false };
  toggleModal = () => {
    console.log("click event fired->showModal->", this.state.showModal);
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div>
        <div className="btn" onClick={this.toggleModal}>
          Click Me
        </div>
        <Transition name="fade">
          {this.state.showModal && (
            <div onClick={this.toggleModal} className="overlay">
              <div className="content"> content</div>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}
