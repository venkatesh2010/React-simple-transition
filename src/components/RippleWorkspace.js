import React from "react";
import RippleEle from "./RippleEle";
import Ripple2 from "./RippleEle2";

export default class RippleWorkspace extends React.Component {
  state = { showModal: false };
  toggleModal = () => {
    // console.log("click event fired->showModal->", this.state.showModal);
    this.setState({ showModal: !this.state.showModal });
  };
  Btn = React.forwardRef((props, ref) => (
    <div ref={ref} {...props} className="btn">
      Flex Children
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
            </div>
            <div className="column">
              <RippleEle bgColor="#8f8f8f" renderEle={this.Btn} />
            </div>
          </div>
        </div>

        <div className="block">
          <div className="columns is-mobile">
            <div className="column">
              <RippleEle
                renderEle={React.forwardRef((props, ref) => (
                  <button
                    ref={ref}
                    {...props}
                    className="button is-info"
                    style={{ height: 200, width: 200, borderRadius: "50%" }}
                  >
                    inline-flex and circle
                  </button>
                ))}
              />
            </div>
            <div className="column">
              <Ripple2>
                <button
                  onClick={() => console.log("clickHandler")}
                  className="button is-info"
                  style={{ height: 200, width: 200, borderRadius: "50%" }}
                >
                  inline-flex and circle v2
                </button>
              </Ripple2>
            </div>
          </div>
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
                button
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
                inline-block
              </div>
            ))}
          />
          <RippleEle
            time={1000}
            renderEle={React.forwardRef((props, ref) => (
              <span
                ref={ref}
                {...props}
                style={{
                  backgroundColor: "#dfdfdf",
                  marginLeft: 0
                }}
              >
                span
              </span>
            ))}
          />
          <span
            style={{
              backgroundColor: "#dfdfdf",
              marginLeft: 0
            }}
          >
            span
          </span>
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
