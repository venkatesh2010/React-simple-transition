import React from "react";
import Transition from "./Transition";
import RippleEle from "./RippleEle";

export default class Modal extends React.Component {
  state = { showModal: false };
  toggleModal = () => {
    console.log("click event fired->showModal->", this.state.showModal);
    this.setState({ showModal: !this.state.showModal });
  };
  Btn = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} {...props} className="btn">
        Click Me
      </div>
    );
  });

  render() {
    return (
      <div>
        <RippleEle renderEle={this.Btn} onClick={this.toggleModal} />
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
