import React from "react";
import Transition from "./Transition";
import RippleEle from "./RippleEle";
import { CardStub } from "./CardStub";

export default class Modal extends React.Component {
  state = { showModal: false, showDropdown: false };
  toggleModal = () => {
    console.log("click event fired->showModal->", this.state.showModal);
    this.setState({ showModal: !this.state.showModal });
  };
  toggleDropdown = () => {
    console.log("click event fired->showModal->", this.state.showModal);
    this.setState({ showDropdown: !this.state.showDropdown });
  };
  Btn = React.forwardRef((props, ref) => (
    <div ref={ref} {...props} className="btn">
      Click Me
    </div>
  ));

  render() {
    return (
      <div className="section">
        <div className="block">
          <div className="columns">
            <div className="column">
              <RippleEle
                bgColor="#8f8f8f"
                renderEle={this.Btn}
                onClick={this.toggleModal}
              />
              <Transition name="fade" time={1000}>
                {this.state.showModal && (
                  <div onClick={this.toggleModal} className="overlay">
                    <div className="content">
                      <CardStub />
                    </div>
                  </div>
                )}
              </Transition>
            </div>
            <div className="column">
              <RippleEle
                bgColor="#8f8f8f"
                renderEle={React.forwardRef((props, ref) => (
                  <button
                    className="button is-primary is-outlined"
                    ref={ref}
                    {...props}
                  >
                    dropdown
                  </button>
                ))}
                onClick={this.toggleDropdown}
              />
              <Transition name="tilt">
                {this.state.showDropdown && (
                  <div className="" style={{ transformOrigin: "0 0 0" }}>
                    <div onClick={this.toggleDropdown} className="content">
                      <CardStub />
                    </div>
                  </div>
                )}
              </Transition>
            </div>
          </div>
        </div>
        <div className="block" />
      </div>
    );
  }
}
