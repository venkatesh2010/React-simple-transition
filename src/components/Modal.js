import React from "react";
import Transition from "./Transition";
import RippleEle from "./RippleEle";
import { CardStub } from "./CardStub";

export default class Modal extends React.Component {
  state = { showModal: false };
  toggleModal = () => {
    console.log("click event fired->showModal->", this.state.showModal);
    this.setState({ showModal: !this.state.showModal });
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
              <Transition name="fade">
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
              <RippleEle bgColor="#8f8f8f" renderEle={this.Btn} />
            </div>
          </div>
        </div>

        <div className="block">
          <RippleEle
            renderEle={React.forwardRef((props, ref) => (
              <button
                ref={ref}
                {...props}
                className="button is-info"
                style={{ height: 200, width: 200, borderRadius: "50%" }}
              >
                Click Me
              </button>
            ))}
          />
        </div>

        <div className="block">
          <RippleEle
            time={1000}
            renderEle={React.forwardRef((props, ref) => (
              <button
                ref={ref}
                {...props}
                className="button is-success is-large"
              >
                Click Me
              </button>
            ))}
          />
        </div>
        <div className="block">
          <RippleEle
            time={1000}
            renderEle={React.forwardRef((props, ref) => (
              <div
                ref={ref}
                {...props}
                style={{
                  height: 40,
                  backgroundColor: "#dfdfdf",
                  display: "inline-block",
                  padding: 20
                }}
              >
                Click Me
              </div>
            ))}
          />
          <div
            style={{
              height: 40,
              backgroundColor: "#dfdfdf",
              display: "inline-block",
              marginLeft: 40,
              padding: 20
            }}
          >
            Click Me
          </div>
        </div>
        <div className="block">
          <RippleEle
            time={5000}
            renderEle={React.forwardRef((props, ref) => (
              <div
                ref={ref}
                {...props}
                style={{ height: 40, backgroundColor: "#dfdfdf" }}
              >
                Click Me
              </div>
            ))}
          />
        </div>
      </div>
    );
  }
}
